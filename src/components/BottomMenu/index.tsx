import { Box } from "@mui/material"
import { IconVButton } from "../IconVButton"
import { IBottomMenu, mocked_bottom_menu } from "./mock"
import { useEffect, useState } from "preact/hooks"

const BottomMenu = () => {
	const [bottomMenuBtns, setBottomMenuBtns] = useState<IBottomMenu[]>([])

	useEffect(() => {
		setBottomMenuBtns(mocked_bottom_menu)
	}, [])

	return (
		<Box
			sx={{
				backgroundColor: "backgroundMain.main",
				display: "flex",
				width: "100%",
				position: "absolute",
				bottom: "0",
				color: "iconVButton.main",
				pt: 1,
				pr: 0,
				pb: 2,
				pl: 0
			}}
		>
			{bottomMenuBtns.map((item, index) => (
				<IconVButton key={index} icon={item.icon} title={item.title} />
			))}
		</Box>
	)
}

export default BottomMenu
