import { Container } from "@mui/system";
import { Box, styled, Button, TextField } from '@mui/material'

export const Customcontainer = styled(Container)(({ theme }) => ({
   backgroundColor: '#fff',
  
   display: 'flex',
   width: 'auto',
   height:'auto',

   padding: theme.spacing(2, 2, 2, 2),
   borderRadius: '15px',
   marginBottom:'10px',
   
   border: '1px solid #17275F',
   "&:hover": {
      border: '2px solid #17275F',
   },

   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft:'2rem',
      paddingRight:'2rem',

   }
}));

export const CustomBox=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
     
  
     }

}))