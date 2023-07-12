import { Box, Typography,styled, Button } from '@mui/material'
import { Container } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';

export const NavLink = styled(Typography)(() => ({
    fontSize: "14px",
    color: '#4F5361',
    fontWeight: 'bold',
    cursor: 'pointer',
    "&:hover": {
        color:'#918787',
    },
}))
export const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
        display: 'none',

    }

}))
export const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: 'pointer',
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }

}))
export const NavbarContainer = styled(Container)(({ theme }) => ({
//    position:'fixed',
    display: 'flex',
    alignItmes: 'center',
    justifyContent: 'space-between',
    // backgroundColor: "#AFD3E2",
//    width:'100%',
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
    },
}))

export const NavbarLogo = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    borderRadius: '80%',
    height: '80px',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}))

export const CustomButton = styled(Button)(({ theme }) => ({
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