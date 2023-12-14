import { useEffect, useState } from "preact/hooks"
import { Dial } from "../../assets/icons/Dial"
import { Lock } from "../../assets/icons/Lock"
import { Phone } from "../../assets/icons/Phone"
import { AuthStep } from "./AuthStep"
import { AUTH_DATA_ACTIVE_STEP } from "../../managers/AuthManager"

const stepsData: IAuthStepData[] = [
	{
		label: "Enter your mobile phone number",
		icon: <Phone />,
		type: "number",
		id: "phone"
	},
	{
		label: "Enter your password",
		icon: <Lock />,
		type: "text",
		id: "password"
	},
	{
		label: "Enter the 6-digit code",
		icon: <Dial />,
		type: "number",
		id: "smsCode"
	},
	{
		label:
			"Enter the last 5 digits of the number we are calling from to confirm the authentication attempt",
		icon: <Dial />,
		type: "number",
		id: "callCode"
	}
]

export const AuthSteps = () => {
	const [activeStep, setActiveStep] = useState(0)

	useEffect(() => {
		AUTH_DATA_ACTIVE_STEP.subscribe((packet) => {
			setActiveStep(packet.currentStep)
		}, "AuthStepsCurrentStep")

		return () => {
			AUTH_DATA_ACTIVE_STEP.unsubscribe("AuthStepsCurrentStep")
		}
	}, [])

	const currentStep: IAuthStepData = stepsData[activeStep]

	return <AuthStep currentStep={currentStep} />
}
