import React, { useState } from 'react'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import logoImg from '../../../assets/images/CanteenPRO.png';
import { useNavigate } from 'react-router-dom'
import { NavLink, NavbarLinksBox, CustomMenuIcon, NavbarContainer, NavbarLogo, CustomButton } from './Style'
import { logout } from '../../../redux/user/userdataReducer'
import { useDispatch, useSelector } from 'react-redux';

type mobileMenuStaus = {
    left: boolean
}

const Navbar = () => {
    //---------------------------------mobile-view------------------------------------------------------
    const [mobileMenu, setMobileMenu] = useState<mobileMenuStaus>({
        left: false,
    });
    const dispatch = useDispatch()
    const userdetails = useSelector((state: any) => state.userInfo)
    // console.log(userdetails, 'userdetails is');
    const navigateToLogin = () => {
        navigate('/user/login')
    }

    const user = useSelector((state: any) => state.userdata)

    const handlesignup = () => {
        navigate('/user/signup')
    }

    const handleLogout = () => {
        localStorage.removeItem('userAccessToken')
        dispatch(logout())
        navigate('/user/login')
    }
    const toggleDrawer = (anchor: string, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if ((event as React.KeyboardEvent).type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };
    const navigate = useNavigate()
    //----------------------------------------------------
    const list = (anchor: string) => {

        const handleItemClick = (text: string) => {
            if (text === 'Home') {
                navigate('/')
                console.log('home clicked');

            } else if (text === 'Build-Canteen') {
                navigate('/user/buildcanteen');
            }
            else if (text === 'On-My-Wish') {
                navigate('/user/onwish')
                console.log('wish is clickedd')
            }
        };
        return (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role='presentation'
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {['Home', "On-My-Wish", 'Build-Canteen'].map(
                        (text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => handleItemClick(text)}>
                                    <ListItemIcon>
                                        {index === 0 && <HomeIcon />}
                                        {index === 1 && <FoodBankIcon />}
                                        {index === 2 && <CollectionsBookmarkIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
            </Box>
        )
    }
    //--------------------------------------------------------------------------------
    return (
        <NavbarContainer>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CustomMenuIcon onClick={toggleDrawer('left', true)} />
                    <Drawer anchor='left' open={mobileMenu['left']} onClose={toggleDrawer('left', false)} >
                        {list('left')}
                    </Drawer>
                    <NavbarLogo src={logoImg} alt='logo' />
                </Box>
                <NavbarLinksBox>
                    <NavLink variant='body2' onClick={() => navigate('/')}>Home</NavLink>
                    <NavLink variant='body2' onClick={() => navigate('/user/onwish')}>On-My-Wish</NavLink>
                    <NavLink variant='body2' onClick={()=> navigate('/user/buildcanteen')}>Build-Canteen</NavLink>
                </NavbarLinksBox>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                {user ? <NavLink onClick={handleLogout} variant='body2'>Logout</NavLink> : <NavLink onClick={handlesignup} variant='body2'>SignUp</NavLink>}
                {user ? <CustomButton sx={{ backgroundColor: 'white', color: '#146C94', borderColor: '#146C94', }} onClick={()=>navigate('/user/userhome')}>{userdetails.name}</CustomButton> : <CustomButton onClick={navigateToLogin}>Login</CustomButton>}
            </Box>
        </NavbarContainer>
    )
}
export default Navbar