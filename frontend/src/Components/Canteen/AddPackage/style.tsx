import { Box,styled} from '@mui/material';

export const StyledForm = styled('form')(({ theme }) => ({
    maxWidth: "80%",
      margin: '0 auto',
      padding: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        
      },
    }));

export const ContainerBox=styled(Box)(({theme})=>({
        display:'flex',
        flexDirection:'row',
        [theme.breakpoints.down('md')]: {
            flexDirection:'column'
          },
    }))
    