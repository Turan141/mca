declare interface IAccountVO {
	ACCOUNT_NUMBER: string;
	BALANCE: string;
	CONSOLIDATE_BALANCE: string;
	CONSOLIDATE_CURRENCY: string;
	CURRENCY: string;
	DESCRIPTION: string | null;
	IBAN: string;
}

declare interface ICardDetails {
  id: string;
  number: string | null;
  name_on_card: string | null;
  code: string | null;
  masked: string;
  type: string;
  status: string;
  status_name: string;
  currency: string;
  balance: number | null;
  available: number | null;
  valid: string | null;
  image: string;
  card_product_code: string;
  product_name: string;
  actions: string[];
  programme: string;
  psystem: string;
  can_be_activated: number;
  can_be_unblocked: number;
  can_be_blocked: number;
  can_be_unloaded: number;
  can_be_reloaded: number;
}


declare interface IAccountHome {
	account: {
		accounts: IAccount[]
		ADDRESS: string
		BIRTH_DATE: string
		CARD_DELIVERY_ADDRESS: string
		CARD_DELIVERY_CITY: string
		pointers: IPointer[]
		settings: ISettings
    notifications: INotifications
	}
	aic: {
		accounts: string
		cards: string
		investments: string
	}
	coins: {
		ACCOUNT_NUMBER: string
		BALANCE: string
		COIN: string
		CONSOLIDATE_BALANCE: string
		CONSOLIDATE_CURRENCY: string
	}[]
	investments: {
		ACCOUNT_NUMBER: string
		BALANCE: string
		CONSOLIDATE_BALANCE: string
		CONSOLIDATE_CURRENCY: string
		INSTRUMENT: string
		PL: string
	}[]
	linked_cards: {
		bank_name: string
		ccy: string
		number: string
		status: string
		uid: string
	}[]
	other_accounts: {
		ACCOUNT_NUMBER: string
		BALANCE: string
		CONSOLIDATE_BALANCE: string
		CONSOLIDATE_CURRENCY: string
		CURRENCY: string
		IBAN: string
		IS_BITCOIN_FUNDING: string
		IS_DUKASCOINS_FUNDING: string
		IS_ETHEREUM_FUNDING: string
		IS_TETHER_FUNDING: string
		STATUS: string
		TYPE: string
	}[]
	'prepaid-cards': {
		card_issuance_city_max_length: string
		card_issuance_fullname_max_length: string
		cards: ICardDetails[]
		card_orders: {
			card_product_code: string
			created: string
			currency: string
			image: string
			product_name: string
			programme: string
			psystem: string
			uid: string
		}[]
	}
}

declare interface IAccount {
	ACCOUNT_NUMBER: string
	BALANCE: string
	CONSOLIDATE_BALANCE: string
	CONSOLIDATE_CURRENCY: string
	CURRENCY: string
	DESCRIPTION: string | null
	IBAN: string
}

interface IFlags {
	apple_pay_enabled: number
	card_issue_enabled: number
}

interface INotifications {
	[key: string]: number
}

interface ISettings {
	COIN_FIAT_ACCOUNT: string
	CONSOLIDATE_CURRENCY: string
}

interface IPointer {
	POINTER: string
	POINTER_TYPE: string
}