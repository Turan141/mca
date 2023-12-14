import { Box, Typography } from "@mui/material"

interface AvatarProps {
	name: string
	url?: string
	size?:string
}

const Avatar: React.FC<AvatarProps> = ({ name, size}) => {
	if(!size)
		size="36px"
	const initials = name
		.split(" ")
		.map((word) => word.charAt(0))
		.join("")

	return (
		<Box
			sx={{
				width: size,
				height: size,
				maxWidth:size,
				maxHeight:size,
				borderRadius: "50%",
				backgroundColor: "headerBackground.main",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#ffffff",
			}}
		>
			<Typography variant='caption' sx={{ fontWeight: "400", fontSize: "16px" }}>
				{initials}
			</Typography>
		</Box>
	)
}

export default Avatar
