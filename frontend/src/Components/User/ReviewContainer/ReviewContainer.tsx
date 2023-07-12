import React from 'react'
import ReviewContent from '../ReviewContent/ReviewContent'
import { Typography, Box } from '@mui/material'
import{PropertiesBox}from './Style'

interface Props{
 review:any
}
const ReviewContainer: React.FC<Props> = ({ review }) => {
    return (
        <div style={{ width: '80%' }}>
            <Box sx={{ padding: '2rem', display: 'flex', justifyContent: 'start', }}>
                <Typography variant='h5' sx={{ textAlign: 'start', fontWeight: 700, }}>Customer Reviews</Typography>
            </Box>
            <PropertiesBox>
                {
                     review.map((item:any)=>( 
                        <ReviewContent key={item?._id} name={item?.userName} review={item?.review}/>
                        
                        
                     )) 
                  
                 } 

            </PropertiesBox>

        </div>
    )
}

export default ReviewContainer