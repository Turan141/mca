import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { ReactNode } from 'preact/compat';
import { Typography } from '@mui/material';


const CircleButtonDiv = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height:'100%'
    },
    color:"white", // ripple color
    
}));

interface ICircleButtonProps{
    icon?:ReactNode,
    title?:string,
    onClick?:(e?:MouseEvent)=>void
}

export const CircleButton =({icon,title,onClick}:ICircleButtonProps)=>{
  return (
    <Box onClick={onClick} sx={{display:"flex",flexDirection:"column",placeItems:"center",gap:1}}>
        <Box sx={{
            backgroundColor:"dark4.main",
            borderRadius:"50%",
            overflow:"hidden",
            width:"56px",
            height:"56px",
            display:"flex",
            placeItems:"center",
            justifyContent:"center"
            
        }}>
            <CircleButtonDiv focusRipple>{icon}</CircleButtonDiv>
        </Box>
    {title && <Typography>{title}</Typography>}</Box>
  );
}