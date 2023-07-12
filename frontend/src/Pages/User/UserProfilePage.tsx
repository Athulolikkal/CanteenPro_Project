import React, { useEffect, useState } from 'react';
import UserProfileSideBar from '../../Components/User/UserProfileSideBar/UserProfileSideBar';
import UserProfileAllBookingListing from '../../Components/User/ProfileAllBookingListing/ProfileAllBooking';

import { Box, Container, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from '../../Axios/axios'
import { userType } from '../../types';

interface storeType {
  userInfo?: {
    userId?: '',
    name?: '',
    email?: '',
  }
}


const ProfielBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '3rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',

  },
}));


const WrapperContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '30%',
  marginLeft: '0rem',
  // backgroundColor:'black',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginTop: '2rem'
  },
}));
const WrapperBookingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '70%',
  marginLeft: '2rem',


  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginTop: '2rem',
    marginLeft: '0rem',
    justifyContent: 'center',
  },
}));



const UserHomePage = () => {
  const [userData, setUserData] = useState<userType>()

  const userdetails = useSelector((state: storeType) => state?.userInfo)
  const userId = userdetails?.userId

  const fetchUserData = async () => {
    try {
      const userData: any = await axios.get(`/user/userdata?userId=${userId}`)

      const userdetailsInfo = {
        name: userData?.data?.name,
        email: userData?.data?.email,
        userId: userData?.data?._id,
        phonenumber: userData?.data?.phonenumber,
        status: userData?.data?.status,
        image: userData?.data?.image,
        bookingAddress: userData?.data?.bookingAddress,
      }
      // console.log(userdetails, 'userDetailsinfo');
      setUserData(userdetailsInfo)
    } catch (err) {
      console.log(err);
    }

  }


  useEffect(() => {
    fetchUserData()

  }, [])

  return (
    <Container>
      <ProfielBox sx={{ display: 'flex', marginTop: '3rem' }}>

        <WrapperContentBox>
          <UserProfileSideBar
            username={userData?.name}
            image={userData?.image}
            email={userData?.email}
            phone={userData?.phonenumber}
            userId={userData?.userId} 
            fetchUserData={fetchUserData}
            />
        </WrapperContentBox>

        <WrapperBookingBox>

          <UserProfileAllBookingListing />
        </WrapperBookingBox>

      </ProfielBox >
    </Container>

  );
};

export default UserHomePage;
