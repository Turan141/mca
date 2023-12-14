import { Box } from "@mui/material"
import { ReactNode } from "preact/compat";
import BottomMenu from "../../components/BottomMenu";

interface IScreenParams{
    children?:any
    bottom?:ReactNode
    head?:ReactNode
}
export const BaseScreen=({children,bottom,head}:IScreenParams)=>{

    if(!bottom)
        bottom=<BottomMenu/>
    const rows=[];
    if(head)
        rows.push("max-content")
    rows.push("1fr")
    if(bottom)
        rows.push("max-content")

    return <Box sx={{
        position:"relative",
        display:"grid",
        gridTemplateRows:rows.join(" "),
        width:"100vw",
        minHeight:"100vh",
    }}>

        {head}
        
        <Box sx={{
            position: "relative",
            overflow:"auto",
        }}>
            <Box sx={{
                position:"absolute",
                width:"100%",
                paddingBottom:"100px"
            }}>
                {children}
            </Box>
        </Box>

        <Box sx={{
            position:"fixed",
            bottom:0,
            width:"100%",
            display:"flex",
            flexDirection:"column",
            paddingBottom:"env(safe-area-inset-bottom)",
            backgroundColor:"red"
        }}>{bottom}</Box>
       
        
    </Box>
}