import { Container } from "@mui/system";
import { Box, styled, Button, TextField } from '@mui/material'

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


export const ContaierBox = styled(Box)(({ theme }) => ({

   display: 'flex',
   [theme.breakpoints.down('md')]: {
      flexDirection:'column'
   }

}))

export const SearchText = styled(TextField)(({ theme }) => ({
   width: '20%',


   [theme.breakpoints.down('md')]: {
      width: '70%'
   }
}))