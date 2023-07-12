import { Box, styled, Avatar, Container,Button } from "@mui/material";

export const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    backgroundColor: '#17275F',
    width: '250px',
    height: 'auto',
    // marginTop: '3rem',
    justifyContent: 'flex-start',
    borderRadius: '25px',
    flexDirection:'column',
    paddingBottom:'2rem',

    [theme.breakpoints.down('md')]: {
        width: '80%',
        height: 'auto',
        // marginTop: '3rem',
      
       
    },
}));

export const AvatarDesign = styled(Avatar)(() => ({
    height: '120px',
    width: '120px',
}))

export const CustomContainer = styled(Container)(({ theme }) => ({
     [theme.breakpoints.down('md')]:{
        display:'flex',
        justifyContent:'center'
     }
}))

export const CustomButton =styled(Button)(()=>({
    backgroundColor: '#17275F',
    color: 'white',
  
    borderColor:'white',
  width:'50%',

  '&:hover': {
     backgroundColor:'white',
  borderColor:'#17275F',
  color:'#17275F',

  },
}))

export const OptionButton =styled(Button)(()=>({
        backgroundColor:'white',
      borderColor:'#17275F',
      color:'#17275F',
      opacity:'0.9',

  '&:hover': {
    backgroundColor: '#17275F',
    color: 'white',
    borderColor:'white',


  },
}))

export const ProfileOptionsBox=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    // justifyContent:'center',
    alignItems:'center',
    paddingTop:'2rem',
    [theme.breakpoints.down('md')]:{
        alignItems:'center',
     }
}))

export const AvatarBox=styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px',
    [theme.breakpoints.down('md')]:{
        marginTop: '0px',
     }
}))