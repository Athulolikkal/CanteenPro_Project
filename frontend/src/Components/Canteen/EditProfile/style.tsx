import {styled,Button,Box} from '@mui/material'

export const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#fff',
    color: '#17275F',
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
        // margin: theme.spacing(0, 'auto', 3, 'auto,'),
        width: "90%",
    
       
    }

}))

export const ModalBox= styled(Box)(({theme})=>({
    marginLeft:'5.5rem',
    [theme.breakpoints.down('md')]: {
        marginLeft:'0rem',
    },
}))