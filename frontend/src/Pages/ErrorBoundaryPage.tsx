import React from 'react'
import { Box, styled, Button } from '@mui/material'
import errorImg from '../assets/images/503 Error Service Unavailable-rafiki.png'


interface ErrorBoundaryPageProps {
  error: Error;
  resetErrorBoundary: () => void;

}



const ErrorBoundary: React.FC<ErrorBoundaryPageProps> = ({ error, resetErrorBoundary }) => {

  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',

    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '40%',
      height: '40%',
    },
  }))

  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#146C94',
    color: 'white',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '0.5rem 1.25rem',
    borderRadius: '7px',
    textTransform: 'none',
    display: 'block',
    border: '2px solid transparent',
    "&:hover": {
      backgroundColor: 'white',
      color: '#146C94',
      borderColor: '#146C94',
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 'auto', 3, 'auto,'),
      width: "90%"
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 'auto', 3, 'auto,'),
      width: "90%"
    }

  }))

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CustomBox>
        <img src={errorImg} alt="service not available" style={{ maxWidth: '100%', }} />
        {/* <p>{error?.message}</p> */}
        <CustomButton onClick={resetErrorBoundary}>{error.message}</CustomButton>

      </CustomBox>
    </Box>
  )
}

export default ErrorBoundary