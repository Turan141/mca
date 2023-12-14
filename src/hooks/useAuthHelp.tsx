import { useEffect, useState } from "react"
import { AUTH_DATA_ACTIVE_STEP, AUTH_DATA_CHANGE_STEP } from "../managers/AuthManager"

interface IAuthHelpHook {
	getHelpText: string
	helpRequested: boolean
	requestHelpText: string
	onGetHelpClick: (value: string) => void
	onRequestHelpClick: () => void
}

export const useAuthHelp = (step: keyof IAuthData): IAuthHelpHook => {
	const [helpRequested, setHelpRequested] = useState(false)
	const [getHelpText, setGetHelpText] = useState<string>("")
	const [requestHelpText, setRequestHelpText] = useState<string>("")

	useEffect(() => {
		if (step === "password") {
			setGetHelpText("Forgot your password?")
		}
		if (step === "smsCode") {
			setGetHelpText("Didn’t receive a code?")
			setRequestHelpText("Request code")
		}
		if (step === "callCode") {
			setGetHelpText("Didn’t receive a call?")
			setRequestHelpText("Request call")
		}
	}, [step])

	useEffect(() => {
		AUTH_DATA_ACTIVE_STEP.subscribe(() => {
			setHelpRequested(false)
		}, "useAuthInput")
		return () => AUTH_DATA_ACTIVE_STEP.unsubscribe("useAuthInput")
	}, [])

	const onGetHelpClick = () => {
		if (step === "password") AUTH_DATA_CHANGE_STEP.invoke({ step: 2 })
		if (step === "smsCode") AUTH_DATA_CHANGE_STEP.invoke({ step: 3 })
		if (step === "callCode") setGetHelpText("Didn’t receive a call?")
	}

	const onRequestHelpClick = () => {
		if (step === "smsCode") setRequestHelpText("Code sent...")
		if (step === "callCode") setRequestHelpText("Automatic call is taking place...")
		setHelpRequested(true)
	}

	return { requestHelpText, getHelpText, helpRequested, onGetHelpClick, onRequestHelpClick }
}
