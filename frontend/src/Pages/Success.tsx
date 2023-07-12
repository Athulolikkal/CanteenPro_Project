
import { Box, styled, Button } from '@mui/material'
import successicon from '../assets/images/Product quality-pana.png'
import { useNavigate } from 'react-router-dom'

const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
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

 

const Success = () => {
 const navigate=useNavigate()
 
 const handleGoBack=()=>{
  navigate('/user/userhome')
}
    return (
   <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <CustomBox >
    
  
   
    <img src={successicon} alt="" style={{ maxWidth: '70%', }} />
    <CustomButton onClick={handleGoBack} >successfully added your booking</CustomButton>
    
    </CustomBox>
   </Box>
  )
}

export default Success