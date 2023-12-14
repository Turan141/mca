import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import React, { ReactNode } from 'react';
import { Typography } from '@mui/material';

const IconVButtonDiv = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: '100%',
  },
  color: "white", // ripple color
}));

interface IIconVButtonProps {
  icon?: ReactNode,
  title?: string,
  id?: string,
  selected?: boolean
}

export const IconVButton = ({ icon, title }: IIconVButtonProps) => {
  if (!React.isValidElement(icon))  return null; 

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", placeItems: "center"}}>
      <Box sx={{
        overflow: "hidden",
        width: "34px",
        height: "34px",
        display: "flex",
        placeItems: "center",
        justifyContent: "center",
      }}>
        <IconVButtonDiv focusRipple>
          {icon}
        </IconVButtonDiv>
      </Box>
      {title && <Typography sx={{ fontSize: '11px' }}>{title}</Typography>}
    </Box>
  );
}
