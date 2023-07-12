import { useEffect, useState } from 'react';
import { Box, Typography, Button, Link, IconButton } from '@mui/material';
import { CustomBox, AvatarDesign, CustomContainer, CustomButton, ProfileOptionsBox, OptionButton, AvatarBox } from './Style';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import toast, { Toaster } from 'react-hot-toast';
import axios from '../../../Axios/axios';
import Axios from 'axios'
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
// import MenuIcon from '@mui/icons-material/Menu';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


interface Props {
  username: string | undefined,
  image: string | undefined,
  email: string | undefined,
  phone: number | undefined,
  userId: string | undefined,
  fetchUserData:() => Promise<void>
}

const UserProfileSideBar: React.FC<Props> = ({ username, image, email, phone, userId,fetchUserData }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showOptions, setShowOptions] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      windowWidth < 960 ? setShowOptions(false) : ''
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [])

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const navigate = useNavigate()

  const handleImageUpdate = async(event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (file) {
        const allowedFormats = ['image/jpeg', 'image/png', 'image/webp'];
        if (allowedFormats.includes(file.type)) {
          // console.log('Selected file:', file);
          const response = await axios.get('/service/s3service')
          const url = response?.data?.url
          // console.log(url);
          await Axios.put(url,file,{
            headers:{
              'Content-Type':'multipart/form-data',
            }
          })
          const imageUrl = url.split('?')[0]
          const imageUpdate= await axios.put('/user/updateprofileimage',{imageUrl,userId})
          // console.log(imageUpdate);
          fetchUserData()
          toast.success('image updated successfully')

        } else {
          toast.error('invalid file type.....')
        }
      } else {
       toast.error('got some error.....')
      }
    } catch (err) {
      console.log(err);
    }
  };


  const handleButtonClick = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/jpeg, image/png, image/webp';
    fileInput.addEventListener('change', handleImageUpdate as unknown as EventListener); // Use addEventListener to assign the event handler
    fileInput.click();
  };


  return (
    <CustomContainer>

      <Toaster
        position="top-left"
        reverseOrder={false}
      />

      <CustomBox>
        {windowWidth < 960 &&
          <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '1rem', marginRight: '1rem' }}>
            <IconButton onClick={handleToggleOptions}>
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>}

        <AvatarBox>

          {image ? (<img src={image} style={{ width: '120px', height: '120px', borderRadius: '50%', border: "1px solid white" }} />) : (<AvatarDesign />)}
          <IconButton
            sx={{
              position: 'absolute',
              marginTop: '4rem',
              marginLeft: '6rem',
              backgroundColor: '#17275F',
              color: 'white',
            }}
            onClick={handleButtonClick}
          >
            <EditIcon />
          </IconButton>

        </AvatarBox>

        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 1, flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
            {username ? username : ''}
          </Typography>
          <Typography variant='body1' sx={{ color: 'white', opacity: '0.9', textAlign: 'center', letterSpacing: '1px', fontSize: '13px', marginTop: '2px' }}>
            {email ? email : ''}
          </Typography>
          <Typography variant='body1' sx={{ color: 'white', opacity: '0.9', textAlign: 'center', letterSpacing: '0.5px', fontSize: '13px', marginTop: '2px' }}>
            +91&nbsp;{phone ? phone : ''}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CustomButton variant='outlined' size='small' >Edit</CustomButton>
        </Box>


        <ProfileOptionsBox sx={{}}>


          {(windowWidth > 960 || showOptions) && (
            <>
              <OptionButton variant='outlined' sx={{ width: '90%' }} onClick={() => navigate('/user/userhome')}>
              <ProductionQuantityLimitsIcon sx={{ marginRight: '0.5rem',width:'18px' }} /> View Bookings
            </OptionButton>
            <OptionButton variant='outlined' sx={{ width: '90%', marginTop: '1rem' }}>
              <WalletIcon sx={{ marginRight: '0.5rem',width:'18px' }} /> Wallet
            </OptionButton>
            <OptionButton variant='outlined' sx={{ width: '90%', marginTop: '1rem' }}>
              <LogoutIcon  sx={{ marginRight: '0.5rem',width:'18px' }} /> Log Out
            </OptionButton>
            </>
          )}



        </ProfileOptionsBox>
      </CustomBox>
    </CustomContainer>
  );
}

export default UserProfileSideBar;
