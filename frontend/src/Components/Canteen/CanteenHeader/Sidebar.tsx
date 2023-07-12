import { useEffect, useState } from 'react';
import { AppBar, Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { canteenLogout } from '../../../redux/canteen/canteenTokensReducers';
import { canteenInfoClear } from '../../../redux/canteen/canteenInfoReducers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { height } from '@mui/system';
import axios from '../../../Axios/axios'

interface storeType {
  canteenInfo?: {
    canteenId?: ''
    canteenName?: ''
    email?: '',
    image?: ''
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(null);
  const canteen = useSelector((state: storeType) => state?.canteenInfo)
  const canteenImage = canteen?.image
  const canteenId=canteen?.canteenId
  const [image, setImage] = useState(canteenImage)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getuserDetails = async () => {
    const userDetails = await axios.get(`/allcanteen/canteendetails?canteenId=${canteenId}`)
    setImage(userDetails?.data?.image)
  }

  const homeclicks = () => {
    toggleMenu()
    navigate('/canteen')
  };

 useEffect(()=>{
  getuserDetails()
 },[])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = (event: any) => {
    setIsProfileOpen(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(null);
  };

  const logOut = () => {
    dispatch(canteenLogout())
    dispatch(canteenInfoClear())
    // console.log('logOut clicked');
    navigate('/canteen/login')
  }

  return (
    <div>
      <AppBar position="static" sx={{ background: '#4B6190' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }}></div>
          {/* <Avatar alt="Profile Image" src="" onClick={toggleProfile} /> */}
          <Box onClick={toggleProfile}>
            {image ? <img src={image} alt="profileimage" loading='lazy' style={{ height: '50px', width: '50px', borderRadius: '50%', cursor: 'pointer', border: "2px solid white" }} /> :
              <Avatar alt="Profile Image" src="" onClick={toggleProfile} style={{ cursor: 'pointer' }} />}

          </Box>

        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <List style={{ padding: '16px' }}>
          <ListItem button onClick={homeclicks}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleMenu}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="DashBoard" onClick={() => navigate('/canteen/dashboard')} />
          </ListItem>
          {/* <ListItem button onClick={toggleMenu}>
            <ListItemIcon>
              <PeopleIcon />

            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem> */}
          <ListItem button onClick={toggleMenu}>
            <ListItemIcon>
              <AssignmentIcon />

            </ListItemIcon>
            <ListItemText primary="Orders" onClick={() => navigate('/canteen/canteenallbookings')} />
          </ListItem>
        </List>
      </Drawer>
      <Menu
        anchorEl={isProfileOpen}
        open={Boolean(isProfileOpen)}
        onClose={handleCloseProfile}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* <MenuItem onClick={handleCloseProfile}>Profile</MenuItem> */}
        <MenuItem onClick={logOut}>Log out</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
