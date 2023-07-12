import React from 'react'
import { Box, styled, Container, Typography } from '@mui/material'
import { CustomContainer, CustomBox } from './Style'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

interface Props{
  totalAmount?:number;
  totalBooking?:number;
  totalPackages?:number;
}

const DashBoardBox:React.FC<Props> = ({totalAmount,totalBooking,totalPackages}) => {
  return (
    <CustomContainer>


      <CustomBox>
        <Typography variant='h5' sx={{ textAlign: 'center', paddingTop: '4rem', color: 'white', fontWeight: 'bold' }} >
          Total Bookings
        </Typography >
        <Typography variant='h6' sx={{ fontWeight: '800', fontSize: '25px', color: 'white', textAlign: 'center' }}>{totalBooking}</Typography>
      </CustomBox>
      <CustomBox sx={{ textAlign: 'center' }}>
        <Typography variant='h5' sx={{ textAlign: 'center', paddingTop: '4rem', color: 'white', fontWeight: 'bold' }} >
          Total Income
        </Typography >
        <Typography variant='h6' sx={{ fontWeight: '800', fontSize: '25px', color: 'white' }}>
          <CurrencyRupeeIcon fontSize='small' sx={{ color: 'white' }} />  {totalAmount}
        </Typography>
      </CustomBox>
      <CustomBox>
        <Typography variant='h5' sx={{ textAlign: 'center', paddingTop: '4rem', color: 'white', fontWeight: 'bold' }} >
          Total Packages
        </Typography >
        <Typography variant='h6' sx={{ fontWeight: '800', fontSize: '25px', color: 'white', textAlign: 'center' }}>{totalPackages}</Typography>
      </CustomBox>

    </CustomContainer>


  )
}

export default DashBoardBox