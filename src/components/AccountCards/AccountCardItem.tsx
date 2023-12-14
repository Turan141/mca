import { Paper, Typography } from "@mui/material"

export const AccountCardItem: React.FC<{
	active: boolean
	card: IAccount
	totalAccountQty: number
}> = ({ active, card, totalAccountQty }) => {
	return (
		<Paper
			elevation={3}
			sx={{
				backgroundColor: active ? "dark1.main" : "gray",
				minWidth: 290,
				width: 290,
				height: 120,
				p: 2,
				position: "relative",
				borderRadius: "12px"
			}}
		>
			<Typography
				variant='subtitle1'
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					transform: "translate(18px, 16px)",
					maxWidth: "80px",
					lineHeight: 1.2,
					letterSpacing: 1.2,
					color: "headerText.main",
					fontSize: "14px"
				}}
			>
				{/* todo change this */}
				CURRENCY ACCOUNTS
			</Typography>

			<Typography
				sx={{
					position: "absolute",
					bottom: 0,
					right: 0,
					transform: "translate(-18px, -16px)",
					textAlign: "right",
					color: "headerText.main",
					fontSize: "22px"
				}}
			>
				{card.CONSOLIDATE_CURRENCY} {totalAccountQty.toLocaleString("en-US")}
			</Typography>
		</Paper>
	)
}
