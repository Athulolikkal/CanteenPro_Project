import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../../Axios/axios'
import { PackageItem } from '../../../types';
import { Box, Typography, Button } from '@mui/material';
import { PackageBox, WrapperContainer, ContainerBox, DetailsBox, CourseType, FooterBox } from './Style'
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import ReviewContainer from '../ReviewContainer/ReviewContainer';

interface storeType {
    userInfo?: {
        userId?: '',
        name?: '',
        email?: '',
    }
}




const PackageView = () => {
    const { packageId } = useParams();
    const [packageDetails, setPackageDetails] = useState<PackageItem>({})
    const navigate = useNavigate()
    const userData = useSelector((state: storeType) => state?.userInfo)

    useEffect(() => {
        const handleview = async () => {
            // console.log(packageId, ':key')
            try {
                const response = await axios.get('/canteen/viewpackge?id=' + packageId)
                // console.log(response?.data?.response,'rsponse is that');
                setPackageDetails(response?.data?.response)
            } catch (err) {
                console.log(err);
            }

        }
        handleview()
    }, [])

    const handleSave = async(packageId: string | undefined,
        canteenId: string | undefined,
        total: number | undefined,
        image: string | undefined) => {

        try {
            const willContinue = await swal({
                title: "Do you want to Save?",
                text: "Are you sure do you want to save this package?",
                icon: "info",
        
              });
              if(willContinue){
                
                const userId=userData?.userId
                const source = 'package'
                const savedData = {
                    userId,
                    packageId,
                    canteenId,
                    source,
                    total,
                    image
                  }
                 axios.post('/wish/addtowish',savedData).then((response)=>{
                    if(response?.data?.status===true){
                        swal({
                            title: "Saved!",
                            text: "Your Package is saved. You can book this package from on my wish within 10 days!",
                            icon: "success",
                          });
                    }else{
                        swal({
                            title: "Error!",
                            text: "This Package is already in On-My-Wish!",
                            icon: "warning",
                          }); 
                    }
                 }).catch((err)=>console.log(err))
              }
            
        } catch (err) {
            console.log(err);
        }

    }




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

        <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>


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
                        {/* <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                            <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Amount-perDay:</span>
                            {packageDetails?.breakfast?.ratePerDay}
                        </CourseType> */}

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
                        {/* <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                            <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Amount-perDay:</span>
                            {packageDetails?.lunch?.ratePerDay}
                        </CourseType> */}


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
                        {/* <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                            <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Amount-perDay:</span>
                            {packageDetails?.dinner?.ratePerDay}
                        </CourseType> */}
                    </DetailsBox>
                </PackageBox>
            </WrapperContainer>
            
           
            <FooterBox >
                
                <Box sx={{ width: '100%', backgroundColor: '#17275F', borderRadius: '10px', }}>
                    <CourseType sx={{ padding: 2, color: '#E4E4E4', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', }}>
                        <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Total Amount PerMonth:</span>
                        {packageDetails?.total}
                    </CourseType>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1, marginBottom: 3 }}>
                    <Button sx={{ width: '100%', height: 'auto', padding: 2, color: '#17275F', borderColor: '#17275F' }} variant='outlined' onClick={() => handleSave(packageDetails?._id, packageDetails?.canteenId, packageDetails?.total, packageDetails?.image)} >
                        Click here to Add to your Canteen
                    </Button>
                </Box>
                

            </FooterBox>

            {packageDetails?.review?.length>0?
            <ReviewContainer 
            review={packageDetails?.review}/>:''}
           
          


        </Box>
    )
}

export default PackageView