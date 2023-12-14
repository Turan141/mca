import { Accounts } from "../../assets/icons/Accounts"
import { Card } from "../../assets/icons/Card"
import { Dukascoin } from "../../assets/icons/Dukascoin"
import { Invest } from "../../assets/icons/Invest"
import { Calendar } from "../../assets/icons/Calendar"
import { ReactNode } from "preact/compat"

export interface IBottomMenu {
	icon?: ReactNode
	title: string
	id: string
	selected?: boolean
}

export const mocked_bottom_menu = [
	{
		icon: <Accounts />,
		title: "Accounts",
		id: "/accounts",
		selected: true
	},
	{
		icon: <Card />,
		title: "Cards",
		id: "/cards",
		selected: false
	},
	{
		icon: <Dukascoin />,
		title: "Dukascoin",
		id: "/dukascoin",
		selected: false
	},
	{
		icon: <Invest />,
		title: "Invest",
		id: "/invest",
		selected: false
	},
	{
		icon: <Calendar />,
		title: "Calendar",
		id: "/calendar",
		selected: false
	}
]
