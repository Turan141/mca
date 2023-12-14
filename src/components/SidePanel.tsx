import { Box } from "@mui/material"
import UserAvatar from "./UserAvatar"
import SideMenu from "./SideMenu"
import LanguageSelect from "./LanguangeSelect"
import { ChatWithBank } from "./ChatWithBank"
import { Spacer } from "./Spacer"

interface ISidePanelProps{
	width:string
}
export const SidePanel = ({width}:ISidePanelProps) => {
	return (
		<Box
			sx={{
				position: "absolute",
				display: "flex",
				flexDirection: "column",
				top: 0,
				left: 0,
				zIndex: 1,
				backgroundColor: "dark1.main",
				//boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.70) inset",
				height: "100vh",
				width: width,
				paddingTop:"env(safe-area-inset-top)",
				paddingLeft:"env(safe-area-inset-left)",
				paddingRight:"env(safe-area-inset-right)",
			}}
		>
			<LanguageSelect />
			<Box sx={{
				flexGrow:1,
				position:"relative",
				overflowX:"hidden",
				overflowY:"scroll",
				display:"flex",
				flexDirection: "column",
				"&>div":{
					position: "absolute",
					width:"100%"
				}
			}}><div>
				<Spacer size="42px" />
				<UserAvatar
					name='Pavel Shveicarskij'
					avatarUrl='https://example.com/avatar.jpg'
				/>
				<Spacer size="42px" />
				<SideMenu />
			</div></Box>
			<ChatWithBank />
		</Box>
	)
}
