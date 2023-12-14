import Signal, { Req } from "badmfck-signal"

export const AUTH_DATA_SET_FIELD: Signal<{
	field: keyof IAuthData
	value: string | number
}> = new Signal()

export const AUTH_DATA_ACTIVE_STEP: Signal<{ currentStep: number }> = new Signal()

export const AUTH_DATA_PROCESS_NEXT_ACTION: Req<void, void> = new Req()

export const AUTH_DATA_PROCESS_BACK_ACTION: Signal<void> = new Signal()

export const AUTH_DATA_GET_FIELD: Req<{ field: keyof IAuthData }, string | undefined> =
	new Req()

export const AUTH_DATA_SUCCESS: Signal<void> = new Signal()

export const AUTH_DATA_FAILURE: Signal<{ errorText: string }> = new Signal()

export const AUTH_DATA_CHANGE_STEP: Signal<{ step: number }> = new Signal()

export const AUTH_DATA_GET_CURRENT_STEP: Req<void, number> = new Req()

class AuthManager {
	private authData: IAuthData | null
	private currentStep: number

	constructor() {
		this.currentStep = 0
		this.authData = {
			phone: "",
			password: "",
			smsCode: "",
			callCode: ""
		}
	}

	async init() {
		AUTH_DATA_SET_FIELD.subscribe((packet) => this.setAuthDataFieldValue(packet))
		AUTH_DATA_CHANGE_STEP.subscribe((packet) => this.changeStep(packet.step))
		AUTH_DATA_PROCESS_BACK_ACTION.subscribe(() => this.processAuthBackButton())
		AUTH_DATA_GET_CURRENT_STEP.listener = async () => this.currentStep
		AUTH_DATA_GET_FIELD.listener = async (packet) =>
			await this.getAuthDataFieldValue(packet)
		AUTH_DATA_PROCESS_NEXT_ACTION.listener = async () =>
			await this.processAuthNextButton()
	}

	private setAuthDataFieldValue(packet: {
		field: keyof IAuthData
		value: string | number
	}) {
		const { field, value } = packet

		if (this.authData?.hasOwnProperty(field)) {
			this.authData[field] = String(value)
		}
	}

	private async getAuthDataFieldValue(packet: {
		field: keyof IAuthData
	}): Promise<string | undefined> {
		const { field } = packet
		return this.authData?.[field]
	}

	private processAuthBackButton(): void {
		if (this.currentStep > 0) {
			this.changeStep(this.currentStep - 1)
		}
	}

	private async processAuthNextButton(): Promise<void> {
		const stepsValidation = [
			this.checkNumberValidity(),
			this.checkPasswordValidity(),
			this.checkSMSCodeValidity(),
			this.checkCallCodeValidity()
		]

		const errorMessages = [
			"Invalid number. Please enter a valid mobile phone number.",
			"Invalid password. Please enter a valid password.",
			"Invalid SMS code. Please enter a valid code.",
			"Invalid call code. Please enter a valid code."
		]

		const isStepValid = await stepsValidation[this.currentStep]
		if (isStepValid) {
			if (this.currentStep === 0) {
				this.changeStep(this.currentStep + 1)
			} else {
				AUTH_DATA_SUCCESS.invoke()
			}
		} else {
			AUTH_DATA_FAILURE.invoke({ errorText: errorMessages[this.currentStep] })
		}
	}

	private async changeStep(step: number): Promise<void> {
		this.currentStep = step
		AUTH_DATA_FAILURE.invoke({ errorText: "" })
		AUTH_DATA_ACTIVE_STEP.invoke({ currentStep: this.currentStep })
	}

	private async checkNumberValidity(): Promise<boolean> {
		const number: string | undefined = this.authData?.phone
		const isValid: boolean = !!number && number.length > 5
		return isValid
	}

	private async checkPasswordValidity(): Promise<boolean> {
		const password: string | undefined = this.authData?.password
		const isValid: boolean = !!password && password.length >= 8
		return isValid
	}

	private async checkSMSCodeValidity(): Promise<boolean> {
		const smsCode: string | undefined = this.authData?.smsCode
		const isValid: boolean = !!smsCode && /^\d{6}$/.test(smsCode)
		return isValid
	}

	private async checkCallCodeValidity(): Promise<boolean> {
		const callCode: string | undefined = this.authData?.callCode
		const isValid: boolean = !!callCode && callCode === "12345"
		return isValid
	}
}

export default AuthManager
