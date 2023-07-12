import { Box, Typography, styled } from '@mui/material';
import { Container, } from "@mui/system";

export const WrapperContainer = styled(Container)(({ theme }) => ({
    // backgroundColor: '#4B6190',
    height: 'auto',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 2, 2, 2),
    borderRadius: '5px',
    marginTop: '3rem',
    // border: '1px solid #146C94',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

export const PackageBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: 'auto',
    justifyContent: 'center',
    padding: 5,
    width: '30%',
    margin: 4,
    flexDirection: 'column',
    //   backgroundColor:'#D6E3EA',
    [theme.breakpoints.down('md')]: {
        width: '90%'
    }
}))

export const ContainerBox = styled(Box)(({ theme }) => ({
    padding: 4,
    backgroundColor: '#17275F',
    width: '100%',
    textAlign: 'center',
    borderRadius: '5px'

}))

export const DetailsBox = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: '#17275F',
    marginTop: '10px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    height: 350,
    padding: 4,

    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: 'auto',
    }
}))

export const CourseType = styled(Typography)(({ theme }) => ({
    width: '90%',
    padding: 1,
    wordWrap: 'break-word',
    textAlign: 'center'

}))

export const FooterBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'spacebetween',
  
    flexDirection: 'column',
    marginTop: 4,
    height: 'auto',
    marginBottom: 4,
    gap: 1,
    width:'75%',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 'auto',
        flexDirection: 'column'
    }
}))