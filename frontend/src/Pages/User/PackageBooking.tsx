import { useState, useEffect } from 'react'
import DatePicking from '../../Components/User/DatePicker/DatePicker'
import { Box, Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddressModal from '../../Components/User/AddressModal/AddressModal'
import AddressBox from '../../Components/User/AddressBox/AddressBox';
import axios from '../../Axios/axios';
import { bookingAddress } from '../../types';
import swal from 'sweetalert';


interface storeType {
  userInfo?: {
    userId?: '',
    name?: '',
    email?: ''
  }
}

declare global {
  interface Window {
    Razorpay: any;
  }
}



const PackageBooking = () => {
  const currentDate = Date.now();
  const [startDate, setStartDate] = useState<Date | null>(new Date(currentDate + 86400000));
  const [endDate, setEndDate] = useState<Date | null>()
  const [count, setCount] = useState<number>(0)
  const [phone, setPhone] = useState<string>()
  const [userAddress, setUserAddress] = useState<bookingAddress>()
  const navigate = useNavigate()

  const bookingItem = useSelector((state: any) => state.wishDetails);
  const userInfo = useSelector((state: storeType) => state.userInfo)
  const userId = userInfo?.userId


  if (bookingItem?.data === undefined) {
    navigate('/');
  }



  const userData = () => {
    axios.get(`/user/userdata?userId=${userId}`).then((response) => {
      // console.log(response?.data);
      setUserAddress(response?.data?.bookingAddress)
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    userData()
   }, []);


  useEffect(() => {
    if (!endDate) {
      setCount(0)
    } else {
      const startingDate = dayjs(startDate)
      const endingDate = dayjs(endDate)
      const remainingDays = endingDate.diff(startingDate, 'day');
      // console.log(remainingDays);
      setCount(remainingDays +2)
    }
  }, [startDate, endDate])

  const ContinueBooking = async () => {
    try {
       
      const willContinue=await swal({
        title:'Are you sure',
        text: "Are you sure do you want to pay for the package",
        icon: "info",
      })
       if(willContinue){
        let totalPayableAmount = 0;
        if (count === 30 && bookingItem?.data?.total) {
          totalPayableAmount = bookingItem?.data?.total;
        }
        else {
          totalPayableAmount = bookingItem?.data?.totalPerDayRate * count;
        }
        const phoneNumber = userAddress?.Phonenumber;
        // console.log(userAddress,'useraddresss');
        // console.log(bookingItem?.data,'bookingData');
        // const total = { totalPayableAmount }
        navigate('/user/otpverification', {
          state: { phoneNumber, totalPayableAmount, userAddress,startDate,endDate,count }
        });
       }
      } catch (err) {
      console.log(err)
    }
}

  return (
    <>
      <Box sx={{ background: '#F9F9F9', padding: 5, borderRadius: '15px' }}>
        <Box >
          <DatePicking setStartDate={setStartDate} setEndDate={setEndDate} />
        </Box>


        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

          <Typography sx={{ textAlign: 'center', marginTop: '2rem' }}>Count of days:<span style={{ fontSize: '20px', fontWeight: 'bold' }}> {count} </span>&nbsp;</Typography>
          {bookingItem?.data?.total ? <Box sx={{ marginTop: '2rem', display: 'flex' }}>
            <Typography sx={{ textAlign: 'center' }}>Total Per Day Rate:<span style={{ fontSize: '20px', fontWeight: 'bold' }}>{bookingItem?.data?.totalPerDayRate}&nbsp;</span></Typography>
            <Typography sx={{ textAlign: 'center' }}>Total Amount of Package:<span style={{ fontSize: '20px', fontWeight: 'bold' }}>{bookingItem?.data?.total}</span>&nbsp;</Typography>
            {count != 30 ?
              <Typography sx={{ textAlign: 'center' }}>Total Payable Amount:<span style={{ fontSize: '20px', fontWeight: 'bold' }}>{bookingItem?.data?.totalPerDayRate * count}</span>&nbsp;</Typography> :
              <Typography sx={{ textAlign: 'center' }}>Total Payable Amount:{bookingItem?.data?.total} </Typography>}
          </Box> :
            <Box sx={{ marginTop: '2rem', display: 'flex' }}>
              <Typography sx={{ textAlign: 'center' }}>Total Per Day Rate:<span style={{ fontSize: '20px', fontWeight: 'bold' }}>{bookingItem?.data?.totalPerDayRate}</span>&nbsp; </Typography>
              <Typography sx={{ textAlign: 'center' }}>Total Payable Amount:<span style={{ fontSize: '20px', fontWeight: 'bold' }}>{bookingItem?.data?.totalPerDayRate * count} </span>&nbsp;</Typography>
            </Box>}
        </Box>


        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          {userAddress ?
            (<AddressModal userDataFunction={userData} userAddress={userAddress} />) :
            (<AddressModal userDataFunction={userData} />)}
        </Box>

        <Box sx={{ marginTop: '1rem' }}>
          {userAddress ?

            (<AddressBox userAddress={userAddress} userData={userData} />) :
            (<Typography sx={{ textAlign: 'center' }}>Add Address For Booking</Typography>)

          }
        </Box>
        <Typography sx={{ textAlign: 'center', marginTop: '2rem', color: 'green' }}>We Accept Payments Only Through Online</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>

          {userAddress && count >= 1 ?
            <Button variant='outlined' sx={{ width: '70%', padding: '1rem', marginTop: '1rem' }} onClick={ContinueBooking}>PayNow For Booking</Button> :
            <Button variant='outlined' sx={{ width: '70%', padding: '1rem', marginTop: '1rem' }} >Before Booking Add Your Booking Address and Select Days For Booking</Button>}
        </Box>
      </Box>
    </>
  )
}

export default PackageBooking