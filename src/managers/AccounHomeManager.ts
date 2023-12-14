import { Req } from "badmfck-signal"
import { AccountHomeMockedData } from "../mockup/AccountHomeMock"

export const REQ_ACCOUNT_GET_HOME: Req<() => void, IAccountHome> = new Req<
	() => void,
	IAccountHome
>()

class AccountHomeManager {
	constructor() {}

	async init() {
		REQ_ACCOUNT_GET_HOME.listener = async () => await this.getAccountHome()
	}

	async getAccountHome(): Promise<IAccountHome> {
		console.log("GET HOME")
		return new Promise((resolve, reject) => {
			try {
				const parsedData = JSON.parse(AccountHomeMockedData)
				setTimeout(() => {
					resolve(parsedData)
				}, 1000)
			} catch (error) {
				reject(error)
			}
		})
	}
}

export default AccountHomeManager
