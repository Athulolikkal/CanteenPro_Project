import {Box,styled,Typography} from '@mui/material';

export const CustomBox=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    gap:theme.spacing(5),
    //  marginTop:theme.spacing(1),
   
    [theme.breakpoints.down('sm')]:{
       flexDirection:'column',
       alignItems:'center',
       textAlign:'center',
    },
}))

export const Title=styled(Typography)(({theme})=>({
   fontSize:'64px',
   color:'#000336',
   fontWeight:'bold',
  
   margin:theme.spacing(4,0,4,0),
   lineHeight:'5rem',
   [theme.breakpoints.down('sm')]:{
      fontSize:'40px',
      lineHeight:'3rem',

    },
}));