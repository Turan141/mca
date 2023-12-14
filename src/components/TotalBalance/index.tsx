import { Box, Typography } from "@mui/material"
import { REQ_ACCOUNT_GET_HOME } from "../../managers/AccounHomeManager"
import { Calendar } from "../../assets/icons/Calendar"
import { currencySymbols } from "../../mockup/AccountsMock"
import { formatNumberWithSpace } from "../../helpers/FormatNumberWithSpace"

const TotalBalance = () => {
	const [accountHomeData] = REQ_ACCOUNT_GET_HOME.useRequest()
	const [value, currency] = accountHomeData?.aic?.accounts?.split(" ") || []

	const totalBalance = `
	${formatNumberWithSpace(value)} 
	${currencySymbols[currency] || "--"}`

	const notifications =
		accountHomeData?.account.notifications["DUKASCOINS.ORDERS.EMAIL"] || 0

	return (
		<Box display='flex' alignItems='center' justifyContent='space-between'>
			<Box>
				<Typography
					sx={{ fontWeight: 400, color: "textGray.darkShade", fontSize: "14px" }}
					variant='h6'
				>
					Total Balance
				</Typography>
				<Typography sx={{ lineHeight: "1", fontWeight: 300 }} variant='h4'>
					{totalBalance}
				</Typography>
			</Box>
			<Box sx={{ position: "relative", width: 24, height: 16 }}>
				<Calendar />
				{notifications > 0 && (
					<Box
						sx={{
							position: "absolute",
							top: -8,
							right: -8,
							backgroundColor: "red",
							borderRadius: "50%",
							width: 22,
							height: 22,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: "#ffffff",
							fontSize: "0.75rem",
							border: "3px solid #E4E9F0"
						}}
					>
						{notifications}
					</Box>
				)}
			</Box>
		</Box>
	)
}

export default TotalBalance
