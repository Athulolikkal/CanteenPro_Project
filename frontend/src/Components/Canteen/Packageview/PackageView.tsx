import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../Axios/axios'
import { PackageItem } from '../../../types';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { PackageBox, WrapperContainer, ContainerBox, DetailsBox, CourseType } from './Style'


const PackageView = () => {
  const { packageId } = useParams();
  const [packageDetails, setPackageDetails] = useState<PackageItem>({})
  const navigate = useNavigate()
  useEffect(() => {
    const handleview = async () => {
      // console.log(packageId, ':key')
      try {
        const response = await axios.get('/canteen/viewpackge?id=' + packageId)

        setPackageDetails(response?.data?.response)

      } catch (err) {
        console.log(err);
      }

    }
    handleview()
  }, [])

  if (packageDetails === undefined || null) {
    navigate('*')
  }

  const breakfastMainCourse = packageDetails?.breakfast?.mainCourse.toString()
  const breakfastSideCourse = packageDetails?.breakfast?.sideCourse.toString()
  const breakfastSpecials = packageDetails?.breakfast?.specials.toString()
  const lunchMainCourse = packageDetails?.lunch?.mainCourse.toString()
  const lunchSideCourse = packageDetails?.lunch?.sideCourse.toString()
  const lunchSpecials = packageDetails?.lunch?.specials.toString()
  const dinnerMainCourse = packageDetails?.dinner?.mainCourse.toString()
  const dinnerSideCourse = packageDetails?.dinner?.sideCourse.toString()
  const dinnerSpecials = packageDetails?.dinner?.specials.toString()
  return (

    <Box>


      <WrapperContainer>
        <PackageBox>
          <ContainerBox>
            <Typography sx={{ fontWeight: '700', fontSize: '20px', color: 'white' }}>BreakFast</Typography>
          </ContainerBox>
          <DetailsBox>

            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>MainCourse:</span>
              {breakfastMainCourse}
            </CourseType>
            <hr style={{ width: '100%', height: '1px' }}></hr>
            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>SideCourse:</span>
              {breakfastSideCourse}
            </CourseType>
            <hr style={{ width: '100%', height: '1px' }}></hr>
            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Specials:</span>
              {breakfastSpecials}
            </CourseType>
            <hr style={{ width: '100%', height: '1px' }}></hr>
            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Amount-perDay:</span>
              {packageDetails?.breakfast?.ratePerDay}
            </CourseType>

          </DetailsBox>
        </PackageBox>
        <PackageBox>
          <ContainerBox>
            <Typography sx={{ fontWeight: '700', fontSize: '20px', color: 'white' }}>Lunch</Typography>
          </ContainerBox>
          <DetailsBox>

            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>MainCourse:</span>
              {lunchMainCourse}
            </CourseType>
            <hr style={{ width: '100%', height: '1px' }}></hr>
            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>SideCourse:</span>
              {lunchSideCourse}
            </CourseType>
            <hr style={{ width: '100%', height: '1px' }}></hr>
            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Specials:</span>
              {lunchSpecials}
            </CourseType>
            <hr style={{ width: '100%', height: '1px' }}></hr>
            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Amount-perDay:</span>
              {packageDetails?.lunch?.ratePerDay}
            </CourseType>


          </DetailsBox>
        </PackageBox>
        <PackageBox>
          <ContainerBox>
            <Typography sx={{ fontWeight: '700', fontSize: '20px', color: 'white' }}>Dinner</Typography>
          </ContainerBox>
          <DetailsBox>
            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>MainCourse:</span>
              {dinnerMainCourse}
            </CourseType>
            <hr style={{ width: '100%', height: '1px' }}></hr>
            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>SideCourse:</span>
              {dinnerSideCourse}
            </CourseType>
            <hr style={{ width: '100%', height: '1px' }}></hr>
            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Specials:</span>
              {dinnerSpecials}
            </CourseType>
            <hr style={{ width: '100%', height: '1px' }}></hr>
            <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Amount-perDay:</span>
              {packageDetails?.dinner?.ratePerDay}
            </CourseType>
          </DetailsBox>
        </PackageBox>
      </WrapperContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4, height: 50, marginBottom: 4 }}>
        <Box sx={{ width: '90%', backgroundColor: '#4B6190', borderRadius: '10px' }}>
          <CourseType sx={{ padding: 2, color: '#E4E4E4', fontSize: '20px', fontWeight: 'bold' }}>
            <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Total Amount PerMonth:</span>
            {packageDetails?.total}
          </CourseType>
        </Box>
      </Box>

    </Box>
  )
}

export default PackageView