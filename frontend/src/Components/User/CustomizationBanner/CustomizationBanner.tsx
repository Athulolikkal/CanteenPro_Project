import {Typography} from '@mui/material'
import {Box} from '@mui/system'
import { Customcontainer,CustomBox,CustomButton} from './Style'
import StartIcon from '../../../src/assets/images/Online Groceries-pana.png'

const CustomizationBanner = () => {
  return (
 
 <CustomBox sx={{marginTop:'2rem'}}>
    <Customcontainer>
        <Box sx={{marginBottom:'1rem'}}>
            <Typography sx={{fontSize:"35px",color:'white',fontWeight:'700'}}>Customize Your Package Now!</Typography>
            <Typography sx={{fontSize:"16px",color:'#ccc',fontWeight:'500',my:3}}>choose from unlimited choices and make your canteen on your wish</Typography>
            <CustomButton >Get Started Now</CustomButton>
        </Box>
        
        <img src={StartIcon} alt="startIcon" style={{width:'38%'}} />
       
       
    </Customcontainer>
   </CustomBox>
  
  )
}

export default CustomizationBanner