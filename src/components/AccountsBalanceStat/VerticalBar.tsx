import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

interface IVerticalIndicatorProps {
	height: number
	label: string
	title?: string
}

export const VerticalIndicator = ({ height, label }:IVerticalIndicatorProps) => {
	const indicatorStyles = {
		indicator: {
			position: "relative",
			height: "100%",
			width: "14px"
		},
		fill: {
			content: "''",
			position: "absolute",
			bottom: "0",
			left: "0",
			right: "0",
			height: `${height}%`,
			borderRadius: "34px",
			minHeight: "14px"
		},
		label: {
			color: "verticalBarText.main"
		},
		title: {
			color: "verticalBarText.main"
		}
	}

	return (
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='bottom'
			alignItems='center'
			height='100%'
			paddingBottom='5px'
			gap='4px'
		>
			<Box style={indicatorStyles.indicator}>
				<Box
					sx={{ backgroundColor: "verticalBarGraph.main" }}
					style={indicatorStyles.fill}
				/>
			</Box>
			<Typography variant='caption' sx={{ ...indicatorStyles.label}}>{label}</Typography>
		</Box>
	)
}