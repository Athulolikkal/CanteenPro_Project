import { Box,styled,Container } from '@mui/material'

export const CustomContainer=styled(Container)(({theme})=>({
          
     display:"flex",
     flexDirection: 'row',
     justifyContent:'space-between',
    


    [theme.breakpoints.down('sm')]:{
       
        flexDirection: 'column',
        // justifyContent:'center',
        alignItems:'center'
       
    }
}))

export const CustomBox=styled(Box)(({theme})=>({
    height:'200px',
    width:'30%',
    backgroundColor:'#4B6190',
    marginTop:'4rem',
    marginLeft:'2rem',
    borderRadius:'10px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
    [theme.breakpoints.down('sm')]:{
       
        marginLeft:'0rem',
        height:'200px',
        width:'90%',
       
    },
    "&:hover": {

        transform: 'scale(1.1)',
        transition: 'transform 0.3s ease-in-out',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        // opacity: 0.8,
        borderRadius: '0.5rem',
    },
}))