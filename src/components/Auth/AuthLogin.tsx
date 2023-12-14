import React from "react"
import { Box } from "@mui/material"
import { LogoWithText } from "../LogoWithText"
import { AuthSteps } from "./AuthSteps"
import { AuthBackButton } from "./AuthActionButtons"

export const AuthLogin: React.FC = () => {
	return (
		<Box sx={{ width: "100%" }}>
			<AuthBackButton />
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<LogoWithText />
			</Box>
			<Box>
				<AuthSteps />
			</Box>
		</Box>
	)
}
