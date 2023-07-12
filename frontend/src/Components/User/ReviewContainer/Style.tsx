import {Box,styled} from '@mui/material';

export const PropertiesBox=styled(Box)(({theme})=>({
    display:'flex',
    cursor:'pointer',
    justifyContent:'space-between',
    marginTop: theme.spacing(5),
    overflowX: 'scroll', 
    overflowY:'hidden',
   
    [theme.breakpoints.down('md')]:{
       
        alignItems:'center',
       
    },
    '&::-webkit-scrollbar': {
      display:'none'
    },
   
 }));
