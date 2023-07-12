import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../Axios/axios'
import { PackageItem } from '../../../types';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { PackageBox, WrapperContainer, ContainerBox, DetailsBox, CourseType, FooterBox, TextBox } from './Style'
import { useDispatch, useSelector } from 'react-redux';
import { getUserWish } from '../../../redux/user/userwishReducer';
import { AppDispatch } from '../../../redux/store';
import { WishViewType } from '../../../types';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import CustomDateRangePicker from '../DatePicker/DatePicker';


// interface storeType {
//    data?:{
//     wishDetails: WishViewType
//    }

// }



const WishItemView = () => {
    const { wishId } = useParams();
    const [wishedItems, setWishedItems] = useState<WishViewType>()
    const dispatch = useDispatch<AppDispatch>()
    const packageView = useSelector((state: any) => state.wishDetails)
    const wishes = packageView?.data
   
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getUserWish({ wishId }))
    }, [wishId])

    useEffect(() => {
        setWishedItems(wishes)
    }, [wishes])

    // console.log(wishedItems, 'wished itemss')
    if (!packageView.data && !packageView.loading) {
        navigate('*')
    }
    const continueBooking = () => {
        navigate('/user/bookingfromwish')
    }



    return (
        <Box>

            {packageView?.loading ? <Typography sx={{ marginTop: '5rem', textAlign: 'center', }}>Loading...........</Typography> :
                <Box>
                    <WrapperContainer>

                        {wishedItems?.breakfast ? <PackageBox>
                            <ContainerBox>
                                <Typography sx={{ fontWeight: '700', fontSize: '20px', color: 'white' }}>BreakFast</Typography>
                            </ContainerBox>
                            <DetailsBox>

                                <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>MainCourse:</span>
                                    {wishedItems?.breakfast?.mainCourse?.toString()}
                                </CourseType>
                                <hr style={{ width: '100%', height: '1px' }}></hr>
                                <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>SideCourse:</span>

                                    {wishedItems?.breakfast?.sideCourse?.toString()}
                                </CourseType>
                                <hr style={{ width: '100%', height: '1px' }}></hr>
                                <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Specials:</span>
                                    {wishedItems?.breakfast?.specials?.toString()}
                                </CourseType>
                                <hr style={{ width: '100%', height: '1px' }}></hr>
                                {/* <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Amount-perDay:</span>
                                    {wishedItems?.breakfast?.ratePerDay}
                                </CourseType> */}

                            </DetailsBox>
                        </PackageBox> : ''}

                        {wishedItems?.lunch ? <PackageBox>
                            <ContainerBox>
                                <Typography sx={{ fontWeight: '700', fontSize: '20px', color: 'white' }}>Lunch</Typography>
                            </ContainerBox>
                            <DetailsBox>

                                <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>MainCourse:</span>
                                    {wishedItems?.lunch?.mainCourse?.toString()}
                                </CourseType>
                                <hr style={{ width: '100%', height: '1px' }}></hr>
                                <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>SideCourse:</span>
                                    {wishedItems?.lunch?.sideCourse?.toString()}
                                </CourseType>
                                <hr style={{ width: '100%', height: '1px' }}></hr>
                                <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Specials:</span>
                                    {wishedItems?.lunch?.specials?.toString()}
                                </CourseType>
                                <hr style={{ width: '100%', height: '1px' }}></hr>
                                {/* <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Amount-perDay:</span>
                                    {wishedItems?.lunch?.ratePerDay}
                                </CourseType> */}


                            </DetailsBox>
                        </PackageBox> : ''}
                        {wishedItems?.dinner ? <PackageBox>
                            <ContainerBox>
                                <Typography sx={{ fontWeight: '700', fontSize: '20px', color: 'white' }}>Dinner</Typography>
                            </ContainerBox>
                            <DetailsBox>
                                <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>MainCourse:</span>
                                    {wishedItems?.dinner?.mainCourse?.toString()}
                                </CourseType>
                                <hr style={{ width: '100%', height: '1px' }}></hr>
                                <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>SideCourse:</span>
                                    {wishedItems?.dinner?.sideCourse?.toString()}
                                </CourseType>
                                <hr style={{ width: '100%', height: '1px' }}></hr>
                                <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Specials:</span>
                                    {wishedItems?.dinner?.specials?.toString()}
                                </CourseType>
                                <hr style={{ width: '100%', height: '1px' }}></hr>
                                {/* <CourseType sx={{ padding: 2, color: '#E4E4E4' }}>
                                    <span style={{ color: 'white', fontWeight: 'bold', marginRight: '3px' }}>Amount-perDay:</span>
                                    {wishedItems?.dinner?.ratePerDay}
                                </CourseType> */}
                            </DetailsBox>
                        </PackageBox> : ''}
                    </WrapperContainer>

                    <TextBox >{
                        wishedItems?.source === 'package' ?
                            <Typography variant='h6' sx={{ fontWeight: '700', fontSize: '22px' }}> Total Amount<span style={{ fontSize: '18px' }}> (for 30 day):</span>
                                <CurrencyRupeeIcon fontSize='small' />  {wishedItems?.total}
                            </Typography> :
                            <Typography variant='h6' sx={{ fontWeight: '700', fontSize: '22px' }}> Total Amount<span style={{ fontSize: '18px' }}> (for one day):</span>
                                <CurrencyRupeeIcon fontSize='small' />  {wishedItems?.totalPerDayRate}
                            </Typography>

                    }
                    </TextBox>

                    {/* <CustomDateRangePicker/> */}




                    <Box sx={{marginTop:'1rem'}}>{wishedItems?.source==='package'||wishedItems?.source === 'customized' && ((wishedItems?.breakfast && wishedItems?.dinner && wishedItems?.lunch && wishedItems?.lunch && wishedItems?.dinner && wishedItems.breakfast.city === wishedItems.lunch.city && wishedItems.breakfast.city === wishedItems.dinner.city) ||
                        (wishedItems?.breakfast && wishedItems?.lunch && !wishedItems?.dinner && wishedItems.breakfast.city === wishedItems.lunch.city) ||
                        (wishedItems?.breakfast && wishedItems?.dinner && !wishedItems?.lunch && wishedItems.breakfast.city === wishedItems.dinner.city) ||
                        (wishedItems?.lunch && wishedItems?.dinner && !wishedItems?.breakfast && wishedItems.lunch.city === wishedItems.dinner.city) ||
                        (wishedItems?.breakfast && !wishedItems?.dinner && !wishedItems?.lunch && wishedItems?.breakfast?.city) ||
                        (wishedItems?.lunch && !wishedItems?.dinner && !wishedItems?.breakfast && wishedItems?.lunch?.city) ||
                        (wishedItems?.dinner && !wishedItems?.breakfast && !wishedItems?.lunch && wishedItems?.dinner?.city)
                    ) ?
                       '' : <Typography sx={{textAlign:'center'}}>
                          Make sure that the available places are the same while choosing the canteens
                        </Typography>

                    }
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <FooterBox >



                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1, marginBottom: 3 }}>

                                {wishedItems?.source==='package'|| wishedItems?.source === 'customized' && ((wishedItems?.breakfast && wishedItems?.dinner && wishedItems?.lunch && wishedItems?.lunch && wishedItems?.dinner && wishedItems.breakfast.city === wishedItems.lunch.city && wishedItems.breakfast.city === wishedItems.dinner.city) ||
                                    (wishedItems?.breakfast && wishedItems?.lunch && !wishedItems?.dinner && wishedItems.breakfast.city === wishedItems.lunch.city) ||
                                    (wishedItems?.breakfast && wishedItems?.dinner && !wishedItems?.lunch && wishedItems.breakfast.city === wishedItems.dinner.city) ||
                                    (wishedItems?.lunch && wishedItems?.dinner && !wishedItems?.breakfast && wishedItems.lunch.city === wishedItems.dinner.city) ||
                                    (wishedItems?.breakfast && !wishedItems?.dinner && !wishedItems?.lunch && wishedItems?.breakfast?.city) ||
                                    (wishedItems?.lunch && !wishedItems?.dinner && !wishedItems?.breakfast && wishedItems?.lunch?.city) ||
                                    (wishedItems?.dinner && !wishedItems?.breakfast && !wishedItems?.lunch && wishedItems?.dinner?.city)



                                ) ?
                                    <Button sx={{ width: '100%', height: 'auto', padding: 2, color: '#17275F', borderColor: '#17275F' }} variant='outlined' onClick={continueBooking}  >
                                        Continue Booking
                                    </Button> : <Button sx={{ width: '100%', height: 'auto', padding: 2, color: '#17275F', borderColor: '#17275F' }} variant='outlined'  >
                                        Can't Contionue Booking
                                    </Button>

                                }

                                {/*                                
                                <Button sx={{ width: '100%', height: 'auto', padding: 2, color: '#17275F', borderColor: '#17275F' }} variant='outlined' onClick={continueBooking}  >
                                    Continue Booking
                                </Button> */}





                            </Box>


                        </FooterBox>
                    </Box>

                </Box>
            }
        </Box>

    )
}

export default WishItemView