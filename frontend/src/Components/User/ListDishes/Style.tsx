import { Box, styled } from "@mui/material";

export const BoxContainer=styled(Box)(({theme})=>({
    display:'flex',
    
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column'
    }
}))