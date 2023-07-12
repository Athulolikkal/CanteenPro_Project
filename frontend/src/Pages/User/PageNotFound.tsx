import React from 'react'
import { Box,Button,Typography,styled } from '@mui/material'
import pagenotfoundimg from '../../assets/images/Oops! 404 Error with a broken robot-rafiki.png'

const PageNotFound = () => {
 
    const CustomBox=styled(Box)(({theme})=>({
        display:'flex',

        justifyContent:'center',
        gap:theme.spacing(5),
        marginTop:theme.spacing(3),
        [theme.breakpoints.down('md')]:{
           flexDirection:'column',
           alignItems:'center',
           textAlign:'center',
        },
        [theme.breakpoints.up('sm')]:{
           flexDirection:'column',
           alignItems:'center',
           width:'40%',
           height:'40%',
        },
        
        
    }))
 
 
 
    return (
   <Box sx={{display:'flex',justifyContent:'center'}}  >
      <CustomBox>
     
       
       <img src={pagenotfoundimg} alt="pagenotfound" style={{maxWidth:'100%'}} />
     
       </CustomBox>
   </Box>
  )
}

export default PageNotFound