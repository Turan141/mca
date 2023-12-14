import { Box, Typography } from "@mui/material"
import { Plus } from "../assets/icons/Plus"
import { Burger } from "../assets/icons/Burger"
import { GD } from "../GD"

export const AccountHead=()=>{
    return <Box sx={{
        backgroundColor:"headerBackground.main",
        color:"headerText.main",
        display:"flex",
        flexDirection:"column",
        paddingTop:"calc(16px + env(safe-area-inset-top))",
        padding: 2
    }}>
        <Box sx={{
            display:"grid",
            gridTemplateColumns:"max-content 1fr max-content",
        }}>
            <div onClick={()=>{GD.S_MAIN_BURGER_CLICK.invoke()}}><Burger /></div>
            <Typography sx={{color: "dark1.main"}} textAlign={"center"} variant="h6">Accounts</Typography>
            <div><Plus/></div>
        </Box>
        {/* <Spacer size="32px"/> */}
        {/* <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
        </Box>
        <Spacer size="32px"/>
        <AccountsBalanceStat/> */}
    </Box>
}