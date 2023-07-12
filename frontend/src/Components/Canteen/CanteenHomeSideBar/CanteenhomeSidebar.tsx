import { Typography, Box } from '@mui/material';
import { Customcontainer, CustomBox, CustomButton, TextBox, ContainerBox } from './style';
import BookOutlined from '@mui/icons-material/BookOutlined';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import { useSelector } from 'react-redux';
import axios from '../../../Axios/axios';
import { useEffect, useState } from 'react';
import EditProfile from '../EditProfile/EditProfile'
// import { useEffect } from 'react';


interface storeType {
  canteenInfo?: {
    canteenId?: ''
    canteenName?: ''
    email?: '',
    image?: ''
  }
}

const CanteenHomeSideBar = () => {
  const [totalPackages, setTotalPackages] = useState<number | undefined>()
  const canteen = useSelector((state: storeType) => state?.canteenInfo)
  const canteenId = canteen?.canteenId
  const canteenEmail = canteen?.email
  const canteenImage = canteen?.image
  // console.log(canteenImage, 'canteenimage');
  // console.log(canteenEmail, 'canteenemail');
  const [email, setCanteenEmail] = useState<string | undefined>(canteenEmail)
  const [image, setImage] = useState<string | undefined>(canteenImage)
  const getTotalCanteenPackages = async () => {

    const total = await axios.get(`/canteen/canteentotalpackages?id=${canteenId}`)
    const totalNumberOfPackages = total?.data
    setTotalPackages(totalNumberOfPackages)

  }
  const getuserDetails = async () => {
    const userDetails = await axios.get(`/allcanteen/canteendetails?canteenId=${canteenId}`)
    setImage(userDetails?.data?.image)
  }
    

  useEffect(() => {
    getTotalCanteenPackages()
    getuserDetails()
    
  }, [])

  return (
    <CustomBox>
      <Customcontainer>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image ? image : 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.svg'} alt="startIcon" style={{ width: '200px', height: '200px', borderRadius: '50%', border: "1px solid white" }} />

          {/* <img src='https://project-video.s3.ap-south-1.amazonaws.com/94804ac0d9e804924a8ef033df48dba2' alt="startIcon" style={{ width: '40%' }} />  */}

          {/* {image?<img src={image}  alt="startIcon" style={{ width:'60%',borderRadius:'50%' }} />: */}
          {/* <img src= 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.svg' alt="startIcon" style={{ width: '60%', borderRadius: '50%' }} /> */}
        </Box>
        <ContainerBox>
          <TextBox>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
              <BookOutlined sx={{ color: 'white', }} />
              <Typography sx={{ fontSize: "20px", color: '#F2EAD3', fontWeight: '700', textAlign: 'center', }}>
                <span style={{ color: 'white' }}>Bookings:</span> 0
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
              <PersonOutlined sx={{ color: 'white' }} />
              <Typography sx={{ fontSize: "20px", color: '#F2EAD3', fontWeight: '700', textAlign: 'center' }}>
                <span style={{ color: 'white' }}>Packages:</span> {totalPackages}
              </Typography>
            </Box>
          </TextBox>
          <Typography sx={{ fontSize: "30px", color: 'white', fontWeight: '700', textAlign: 'center' }}>{canteen?.canteenName}</Typography>
          <Typography sx={{ fontSize: "16px", color: '#ccc', fontWeight: '500', my: 2, textAlign: 'center' }}>{email}</Typography>
          {/* <CustomButton sx={{ marginBottom: 1 }}>Edit Profile</CustomButton> */}
          <Box sx={{ marginBottom: 1 }}>
            <EditProfile canteenId={canteenId} canteenEmail={canteenEmail} setCanteenEmail={setCanteenEmail} setImage={setImage} getTotalCanteenPackages={getTotalCanteenPackages} />
          </Box>

        </ContainerBox>
      </Customcontainer>
    </CustomBox>
  );
};

export default CanteenHomeSideBar;
