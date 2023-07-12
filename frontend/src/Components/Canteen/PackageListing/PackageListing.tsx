import { useState } from 'react';
import { Box, Typography, } from '@mui/material'
import { Customcontainer, CustomButton, BookingButton, CustomBox, ButtonContainer, TextContainer, CustomBoxText } from './Style'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import axios from '../../../Axios/axios'
import { useNavigate, Link } from 'react-router-dom';


interface Props {
  packageId?: string,
  canteenId?: string,
  total?: number,
  canteenName?: string | undefined,
  image?: string,
  status?: boolean
}

const PackageListing: React.FC<Props> = ({ packageId, canteenId, total, canteenName, image, status }) => {

  const [isStatus, setStatus] = useState(status)
  const navigate = useNavigate()
 
  

  const handleRemove = async () => {
    try {
      await axios.patch('/canteen/removepackage?id=' + packageId)

      setStatus(!isStatus);

    } catch (err) {
      console.log(err);
    }

  }

  return (
    
    <Box sx={{ maxWidth: '100%' }}>
          
      <Customcontainer style={{ opacity: isStatus ? 0.9 : 0.4 }}>

        <TextContainer>
          <CustomBox>
            <img
              src={image ? image : ''}
              alt='canteen image'
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '100px',
                border: '1px solid white',
                display: 'block',
              }}
            />

          </CustomBox>

          <CustomBoxText>

            <Typography variant='h6' sx={{ fontWeight: '800', fontSize: '25px' }}>
              <CurrencyRupeeIcon fontSize='small' /> {total}
            </Typography>

            

           {isStatus?<Typography sx={{ fontSize: '16px', fontWeight: '600', marginBottom: 1, color: '#A0A7AB ' }}>
              {canteenName}
            </Typography>:<Typography sx={{textAlign:'center',color:'red',fontWeight:700,mt:2}}>Removed from user view <br /><span style={{color:'green',fontWeight:400}}>click add to get user view</span></Typography>}
          </CustomBoxText>
        </TextContainer>


        <CustomButton sx={{}} onClick={handleRemove}>{isStatus ? 'Remove' : 'Add'}</CustomButton>


        <BookingButton  to={`/canteen/view/${packageId}`}>
          Views
        </BookingButton>

       </Customcontainer>
     
     <Box>
     
     </Box>

    </Box>
  )
}

export default PackageListing