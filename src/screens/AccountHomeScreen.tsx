import { BaseScreen } from "../screens/bases/BaseScreen"
import { AccountHead } from "../components/AccountHead"
import { AccountsList } from "../components/AccountsList"
import { Box } from "@mui/material"
// import { REQ_ACCOUNT_GET_HOME } from "../managers/AccounHomeManager"
import BottomMenu from "../components/BottomMenu"
// import { useState } from "preact/hooks"
import TotalBalance from "../components/TotalBalance"
import AccountCards from "../components/AccountCards"

export const AccountHomeScreen = () => {
	// const [isLoading, setIsLoading] = useState<boolean>(true)

	// const [accountHomeData] = REQ_ACCOUNT_GET_HOME.useRequest(()=>setIsLoading(false))


	return (
		<BaseScreen head={<AccountHead />} bottom={<BottomMenu />}>
			<Box sx={{ backgroundColor: "headerBackground.main" }}>
				<Box
					sx={{ pl: 2, pr: 3, pt: 1, pb: 1, display: "flex", flexDirection: "column" }}
				>
					<Box>
						<TotalBalance />
					</Box>
					<Box>
						<AccountCards/>
					</Box>
					<Box>
						{/* TODO Icon Buttons */}
					</Box>
					<Box>
						{/* TODO Hide Balance */}
					</Box>
				</Box>
			</Box>

			<AccountsList />
		</BaseScreen>
	)
}


