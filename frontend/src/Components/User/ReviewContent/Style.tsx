import {Box,styled,Container} from '@mui/material';

export const Customcontainer = styled(Container)(({ theme }) => ({
    backgroundColor: '#fff',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    width: 'auto',
    padding: theme.spacing(2, 2, 2, 2),
    borderRadius: '15px',
    marginTop: '1rem',
    marginBottom:'1rem',
    marginLeft:'10px',
    border: '4px solid #146C94',
    "&:hover": {
       border: '3px solid #146C94',
       transform: 'scale(1.1)',
       transition: 'transform 0.3s ease-in-out',
       boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
       opacity: 0.8,
       borderRadius: '0.5rem',
        },
    
    [theme.breakpoints.down('sm')]: {
     
      alignItems: 'center',
     
      
    }
  }));

  export const CardContainer = styled(Box)(({ theme }) => ({
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    width: 300,
    [theme.breakpoints.down('md')]: {
        width: 250,
    },
}));
