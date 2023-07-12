import { Box,styled,Container } from '@mui/material'

export const CustomContainer=styled(Container)(({theme})=>({
          
     display:"flex",
     flexDirection: 'row',
     justifyContent:'space-between',
    


    [theme.breakpoints.down('sm')]:{
       
        flexDirection: 'column',
       
        alignItems:'center'
       
    }
}))

export const CustomBox = styled(Box)(({ theme }) => ({
    height: '400px',
    width: '50%',
    border: '2px solid',
    borderColor: '#4B6190',
    display: 'flex',
    flexDirection: 'column', // Align children in a column
    justifyContent: 'flex-start', // Align children at the top
    alignItems: 'center', // Center children horizontally
    marginTop: '4rem',
    marginLeft: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0rem',
      height: '400px',
      width: '100%',
    },
  }));
  
