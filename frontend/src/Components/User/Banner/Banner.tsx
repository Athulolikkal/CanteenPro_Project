import {Box} from '@mui/material';
import { Container } from '@mui/system';
import deliveryImg from '../../../assets/images/Delivery address-pana.png';
import {CustomBox,Title} from './Style'


const Banner = () => {
 return (
    <Box sx={{backgroundColor:'#AFD3E2',}}>
<Container>
   
    <CustomBox>
    <Box sx={{flex:'1'}}>
       
        <Title variant="h1" sx={{marginTop:'7rem'}}>Create your budget friendly canteen with  <span style={{color:'#146C94'}}>CanteenPro.</span> </Title>
         
    </Box>
    <Box sx={{flex:'1.25'}}>
      <img src={deliveryImg} alt="bannerimg" style={{maxWidth:'100%',marginBottom:'2rem'}} />
    </Box>
    </CustomBox>
</Container>
    </Box>
   
    )
   
  
}

export default Banner