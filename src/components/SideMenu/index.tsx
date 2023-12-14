import { useEffect, useState } from "preact/hooks"
import { MenuButtons } from "./mock"
import MenuItem from "../MenuItem"
import { Box } from "@mui/material"

const SideMenu = () => {
	const [menuButtons, setMenuButtons] = useState<IMenuButton[]>([])

	useEffect(() => {
		setMenuButtons(MenuButtons)
	}, [])

	return (
		<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
			{menuButtons.map((button, index) => (
				<MenuItem key={index} buttonProps={button} />
			))}
		</Box>
	)
}

export default SideMenu
