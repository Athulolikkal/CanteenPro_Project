import React from 'react';
import { Box, Typography, styled, Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { WrapperContainer, BoxContainer } from './Style';
import Radio from '@mui/material/Radio';
import { bookingAddress } from '../../../types';

interface Props{
  userAddress?:bookingAddress;
  userData?: () => void;
}


const AddressBox:React.FC<Props> = ({userAddress,userData}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <WrapperContainer>
        <BoxContainer>
          
          <Typography sx={{ textAlign: 'center', color: 'white',marginTop:'5.5px',fontSize:'14px' }}>{userAddress?.Name},</Typography>
          <Typography sx={{ textAlign: 'center', color: 'white',marginTop:'5.5px',fontSize:'14px' }}>{userAddress?.Building},</Typography>
          <Typography sx={{ textAlign: 'center', color: 'white',marginTop:'5.5px',fontSize:'14px' }}>{userAddress?.Street},</Typography>
          <Typography sx={{ textAlign: 'center', color: 'white',marginTop:'5.5px',fontSize:'14px' }}>{userAddress?.City},</Typography>
          <Typography sx={{ textAlign: 'center', color: 'white',marginTop:'5.5px',fontSize:'14px' }}>{userAddress?.District},</Typography>
          <Typography sx={{ textAlign: 'center', color: 'white',marginTop:'5.5px',fontSize:'14px' }}>Ph:&nbsp;{userAddress?.Phonenumber},</Typography>
          <Typography sx={{ textAlign: 'center', color: 'white',marginTop:'5.5px',fontSize:'14px' }}>Pin:&nbsp;{userAddress?.Pincode}</Typography>
      
          <IconButton 
            sx={{color:'white',}}
            color="inherit"
            aria-label="Delete"
          >
            <DeleteIcon />
          </IconButton>
      
      
      
        </BoxContainer>
      </WrapperContainer>
    </Box>
  );
}

export default AddressBox;
