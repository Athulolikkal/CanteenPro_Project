
import { Box,Typography } from '@mui/material'
import {Customcontainer,CardContainer} from './Style'
// import { textAlign } from '@mui/system'

interface Props{
    name?:string,
    review?:string,
}

const ReviewContent:React.FC<Props> = ({name,review}) => {
  return (
<CardContainer>
<Customcontainer>
      <Box sx={{textAlign:'center',}}>
     <Typography sx={{fontSize:'14px',fontWeight:600}} >{review}</Typography>
      </Box>
      <Box sx={{display:'flex',justifyContent:'flex-end',paddingTop:'1rem'}}>
      <Typography sx={{fontSize:'16px',fontWeight:700}}>{name}</Typography>
      </Box>
   </Customcontainer>
</CardContainer>
  )
}

export default ReviewContent