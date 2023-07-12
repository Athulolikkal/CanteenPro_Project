import { Container } from "@mui/system";
import { Box, styled, Button, TextField } from '@mui/material'

export const Customcontainer = styled(Container)(({ theme }) => ({
   backgroundColor: '#fff',
   height: 'auto',
   display: 'flex',
   width: '100%',
   padding: theme.spacing(2, 2, 2, 2),
   borderRadius: '15px',
   marginTop: '1rem',
   border: '1px solid #146C94',
   "&:hover": {
      border: '2px solid #146C94',
   },

   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',

   }
}));

export const TextContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',

});

export const CustomButton = styled(Button)(({ theme }) => ({
   backgroundColor: '#fff',
   color: '#17275F',
   fontWeight: '700',
   fontSize: '14px',
   cursor: 'pointer',
   padding: '0.5rem 1.25rem ',
   borderRadius: '7px',
   textTransform: 'none',
   display: 'block',
   border: '2px solid transparent',
   height: '3rem',
   marginTop: '1.5rem',
   borderColor: '#146C94',
   marginLeft: '50%',
   "&:hover": {
      backgroundColor: 'white',
      color: '#146C94',
      borderColor: '#146C94',

   },

   [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 'auto', 3, 'auto,'),
      width: "90%",
      height: 'auto',
      marginTop: '0.5rem',
      marginLeft: '0%',
   },
   [theme.breakpoints.down('md')]: {
      marginLeft: '0%',
   }

}))
export const BookingButton = styled(Button)(({ theme }) => ({
   backgroundColor: '#146C94',
   color: 'white',
   fontWeight: '700',
   fontSize: '14px',
   cursor: 'pointer',
   padding: '0.5rem 1.25rem',

   marginLeft: '10px',
   borderRadius: '7px',
   textTransform: 'none',
   display: 'block',
   border: '2px solid transparent',
   height: '3rem',
   marginTop: '1.5rem',
   "&:hover": {
      backgroundColor: 'white',
      color: '#146C94',
      borderColor: '#146C94',

   },

   [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 'auto', 3, 'auto,'),
      width: "90%",
      height: 'auto',
      marginTop: '0.5rem',
      marginLeft: '0px',
   }

}))

export const CustomBox = styled(Box)(({ theme }) => ({

   display: 'flex',
   alignItems: 'center',

   [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      paddingRight: 9,
      marginBottom: '10px'

   }


}))

export const ButtonContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   marginTop: '5px',
});


export const CustomBoxText = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   color: '#146C94',
   paddingLeft: '2rem',
   paddingRight: '2rem',

   [theme.breakpoints.down('sm')]: {

      paddingLeft: '0rem',

   }
}))

export const SearchBox = styled(Box)(({ theme }) => ({

   display: 'flex',
   justifyContent: 'flex-start',
   marginLeft: '11%',
   [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginLeft: '0'
   }

}))

export const SearchText = styled(TextField)(({ theme }) => ({
     width:'20%',
    
   
     [theme.breakpoints.down('md')]: {
    width:'70%'
   }
}))