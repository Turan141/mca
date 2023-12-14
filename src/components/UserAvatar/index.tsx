import { Box, Typography } from "@mui/material"
import Avatar from "../Avatar"

interface UserAvatarProps {
	name: string
	avatarUrl?: string
}

const UserAvatar = ({ name, avatarUrl }:UserAvatarProps) => {
	return (
		<Box flexDirection='column' display='flex' alignItems='center' textAlign='center'>
			<Avatar name={name} url={avatarUrl} size={"56px"} />
			<Typography
				sx={{ color: "iconVButton.main", wordBreak: "break-word" }}
				mt={1}
				fontSize='1rem'
			>
				{name}
			</Typography>
		</Box>
	)
}

export default UserAvatar
