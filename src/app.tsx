import { Box, CssBaseline } from "@mui/material"
import { PaletteColorOptions, PaletteOptions, ThemeProvider, createTheme} from "@mui/material/styles"
import { SidePanel } from "./components/SidePanel"
import { useEffect, useState } from 'preact/hooks';
import { GD } from './GD';
import Signal from "badmfck-signal";
import { AccountHomeScreen } from "./screens/AccountHomeScreen";
import AccountHomeManager from "./managers/AccounHomeManager";
import { PaletteAugmentColorOptions } from "@mui/material/styles/createPalette";
import { S_BRIDGE_APP_READY } from "./bridge/Bridge";
import Auth from "./components/Auth";
import { AUTH_DATA_SUCCESS } from "./managers/AuthManager";

Signal.setupReact(useState,useEffect)

interface CustomTypographyOptions {
  fontFamily?: string;
  fontSize?: number;
  h1?: {
    fontSize?: string;
    fontWeight?: number;
  };
  // Define other typography variants as needed
}
interface IPalleteLight extends PaletteOptions{
	light1:PaletteColorOptions,
	light2:PaletteColorOptions,
	headerBackground?:PaletteColorOptions,
	headerText?:PaletteColorOptions,
	dark4?:PaletteColorOptions,
	dark1?:PaletteColorOptions,
	backgroundMain?:PaletteColorOptions
	verticalBarGraph?:PaletteColorOptions
	verticalBarText?: PaletteColorOptions
	accountBalanceStat?: PaletteColorOptions
	iconVButton?: PaletteColorOptions
	sideMenuButtonText?: PaletteColorOptions
	accountLineLight?: PaletteColorOptions
	textGray?: PaletteAugmentColorOptions
	activeDot?: PaletteColorOptions
}


const palleteLight:IPalleteLight={
	activeDot:{
		main: "#D92626"
	},
	light1:{
		main:"#E4E9F0"
	},
	light2:{
		main:"#FFFFFF",
	},
	dark1:{
		main:"#14171E"
	},
	dark4:{
		main:"#222730",
	},
	backgroundMain:{
		main:"#FFFFFF",
	},
	accountLineLight:{
		main:"#DADADA"
	},
	headerBackground:{
		main:"#E4E9F0"
	},
	headerText:{
		main:"#FFFFFF"
	},
	accountBalanceStat: {
		main: "#222730"
	},
	verticalBarGraph: {
		main: "#F36D6E"
	},
	verticalBarText: {
		main: "white"
	},
	sideMenuButtonText:{
		main:"#F7F9FA"
	},
	iconVButton: {
		main: "#919BA8"
	},
	text:{
		primary:"#222730",
		secondary: "#515866"
	},
	textGray:{
		color: {
			main: "#919BA8",
		},
		darkShade:"#515866",
		lightShade: "#919BA8",
	}
}

// const palleteDark:IPalleteDark={

// 	text:{
// 		primary:"#222730",
// 		secondary: "#515866"
// 	},
// 	textGray:{
// 		color: {
// 			main: "#919BA8",
// 		},
// 		darkShade:"#515866",
// 		lightShade: "#919BA8",
// 	}
// }


const components={
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				userSelect:"none",
				overscrollBehavior: "contain"
			}
		}
	}
}

//...darkScrollbar(),
// const dark = createTheme({
// 	palette: palleteDark,
// 	components: components
// })

const light = createTheme({
	palette: palleteLight,
	components: components,
	typography: {
    fontFamily: "'SF Pro Display', Arial, sans-serif",
  } as CustomTypographyOptions,
})


const accountHomeManager = new AccountHomeManager()
accountHomeManager.init()


export function App() {
	const [sideMenuState,setSideMenuState]=useState<boolean>(false);
	const[isAuth, setIsAuth]=useState<boolean>(false);
	GD.S_MAIN_BURGER_CLICK.use([sideMenuState],()=>setSideMenuState(!sideMenuState))
	const menuSize="70%"

	useEffect(()=>{
		console.log("App rendered");
		S_BRIDGE_APP_READY.invoke();
	},[])

	useEffect(() => {
		AUTH_DATA_SUCCESS.subscribe(() => {
			setIsAuth(true)
		}, "App")
	
		return () => {
			AUTH_DATA_SUCCESS.unsubscribe("App")
		}
	}, [])

	const renderMainHomeScreen = () => (
		<>
		<SidePanel width={menuSize} />
		<Box
			sx={{
				position: "relative",
				zIndex: 2,
				transform: sideMenuState ? `translate(${menuSize})` : "none",
				transition: "transform .2s",
				backgroundColor: "backgroundMain.main"
			}}
		>
			{sideMenuState && (
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						zIndex: 3,
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(0,0,0,.2)"
					}}
					onClick={() => GD.S_MAIN_BURGER_CLICK.invoke()}
				></Box>
			)}
			<AccountHomeScreen />
		</Box>
	</>
	)
	


	return (
		<ThemeProvider theme={light}>
			<CssBaseline />
			<Box
				sx={{
					transform: "translateZ(1)",
					overflowX: "hidden"
				}}
			>
				{isAuth ? renderMainHomeScreen() : <Auth />}
			</Box>
		</ThemeProvider>
	)

}
