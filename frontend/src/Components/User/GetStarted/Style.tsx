import {styled,Button} from '@mui/material'
import {Box,Container} from '@mui/system'

export const Customcontainer=styled(Container)(({theme})=>({
       backgroundColor:'#17275F',
       height:'416px',
       borderRadius:'15px',
       display:'flex',
       justifyContent:'space-around',
       alignItems:'center',
       [theme.breakpoints.down('md')]:{
        height:'auto',
        flexDirection:'column',
        alignItems:'center',
        padding:theme.spacing(3,3,0,3),
        width:'90%'
       }
}));

export const CustomBox=styled(Box)(({theme})=>({
          
    padding:theme.spacing(10,0,10,0),
    margin:theme.spacing(0,2,0,2),
    [theme.breakpoints.down('md')]:{
       
        padding:'0'
       
    }
}))

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
        margin: theme.spacing(0, 'auto', 3, 'auto,'),
        width: "90%"
    }

}))

