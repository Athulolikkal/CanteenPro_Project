import React from 'react'
import { Typography } from '@mui/material';
import { CardContainer, CardImage, TextHeader, } from './Style'
import {useNavigate} from 'react-router-dom'

interface Props {
  packageId?: string;
  img?: string;
  name?:string;
  price?: number;
  category?: string;
  city?:string;
}
const RowPost: React.FC<Props> = ({ packageId, img,name,price,category,city }) => {

  const handleClick = () => {
    // console.log(packageId);
    navigate(`/view/${packageId}`)

  }
 const navigate=useNavigate()

  return (
 
    <CardContainer onClick={handleClick}>
      <CardImage src={img} alt='naem' loading='lazy'  />
      <TextHeader> {name}</TextHeader>
      <Typography variant="body2" align="center">
        Price: {price}
      </Typography>
      <Typography variant="body2" align="center">
        Avaialble In: {city}
      </Typography>
      <Typography variant="body2" align="center">
         {category}
      </Typography>
    </CardContainer>
  )
}

export default RowPost