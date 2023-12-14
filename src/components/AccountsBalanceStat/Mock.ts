export interface ICurrency {
	value: number // баланс в консолидированной валюте
	name: string // iso code валюты
}

export const mocked_currencies: ICurrency[] = [
	{ value: 1000, name: "USD" },
	{ value: 750, name: "EUR" },
	{ value: 500, name: "GBP" },
	{ value: 100, name: "CAD" },
	{ value: 400, name: "RUB" },
	{ value: 500, name: "JPY" },
	{ value: 350, name: "CHF" }
]