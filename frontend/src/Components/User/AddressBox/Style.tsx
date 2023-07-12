import { Box, styled, Container } from "@mui/material";

export const WrapperContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent:'center',
  flexDirection: "column",
  width:'70%',
  [theme.breakpoints.down('md')]:{
     width:'100%',

  }

}));

export const BoxContainer =styled(Box)(({theme})=>({
  display:'flex',
  backgroundColor:'#17275F',
  justifyContent: "center",
  borderRadius: '15px',
  flexDirection: "row",
  
  padding:'2rem',
  [theme.breakpoints.down('md')]:{
    flexDirection: "column",
    
 }
 

}))