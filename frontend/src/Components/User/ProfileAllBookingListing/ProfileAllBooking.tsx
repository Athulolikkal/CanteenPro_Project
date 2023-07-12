import React, { useEffect, useState } from 'react'
import { Box, Typography, Stack, Pagination, IconButton, Tooltip } from '@mui/material'
import { Customcontainer, CustomBox } from './Style'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import AutorenewIcon from '@mui/icons-material/Autorenew';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import { BookedItem, userType } from '../../../types';
import axios from '../../../Axios/axios'
import { useSelector } from 'react-redux';
import BookingExtending from '../BookingExtendingModal/BookingExtendingModal';
import CancelBookingModal from '../CancelBookingModal/CancelBookingModal';
import AddReview from '../AddReview/AddReview';


interface storeType {
    userInfo?: {
        userId?: '',
        name?: '',
        email?: '',
    }
}


const ProfileAllBooking = () => {
    const [bookedItem, setbookedItem] = useState<BookedItem[]>()
    const [isLoading, setLoading] = useState<boolean>(false)
    const userdetails = useSelector((state: storeType) => state?.userInfo)
    const userId = userdetails?.userId
    const userName=userdetails?.name
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    //pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = bookedItem?.slice(indexOfFirstItem, indexOfLastItem);

    const getAllBookings = async () => {
        try {
            setLoading(true)
            const allBookings = await axios.get(`/booking/getalluserbooking?userId=${userId}`)
            setbookedItem(allBookings?.data)
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllBookings()
    }, [])

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const currentDate = new Date();

    return (
        <Box sx={{ maxWidth: '100%', paddingBottom: '1rem' }}>

            {bookedItem?.length === 0 && !isLoading ? (<Typography sx={{ textAlign: 'center', marginTop: '12rem', color: '#000339', fontWeight: 700 }}>
                no bookings.........
            </Typography>) : isLoading ? (<Typography sx={{ textAlign: 'center', marginTop: '12rem', color: '#000339', fontWeight: 700, }}>
                Loading.....
            </Typography>) :
                (
                    currentItems?.map((item: BookedItem) => (
                        <Customcontainer >
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 1, }}>
                                <img src={item?.source === 'package' ? (item?.image) : ('https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.svg')} alt=""
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '100px',
                                        border: '1px solid white',
                                        display: 'block',
                                    }}
                                />

                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 1, }}>
                                <Typography variant='h6' sx={{ fontWeight: '800', fontSize: '25px', color: "#17275F", textAlign: 'center' }}>
                                    <CurrencyRupeeIcon fontSize='small' sx={{ color: "#17275F" }} />{item?.bookingAmount}
                                </Typography>

                                {(item && item.endDate && (currentDate > new Date(item.endDate) || !item?.status || !item?.booked || item?.cancelled === true)) ? (
                                    <Typography variant='h6' sx={{ fontWeight: '700', fontSize: '12px', color: '#17275F', textAlign: 'center' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <CircleSharpIcon sx={{ fontSize: '14px', color: 'red' }} />
                                            <span style={{ marginLeft: '4px' }}>Expired</span>
                                        </Box>
                                    </Typography>
                                ) : currentDate >= new Date(item?.startDate ? item.startDate : '') ? (
                                    <Typography variant='h6' sx={{ fontWeight: '700', fontSize: '12px', color: '#17275F', textAlign: 'center' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <CircleSharpIcon sx={{ fontSize: '14px', color: 'green' }} />
                                            <span style={{ marginLeft: '4px' }}>Active</span>
                                        </Box>
                                    </Typography>
                                ) : (<Typography variant='h6' sx={{ fontWeight: '700', fontSize: '12px', color: '#17275F', textAlign: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <CircleSharpIcon sx={{ fontSize: '14px', color: 'green' }} />
                                        <span style={{ marginLeft: '4px' }}>Not started</span>
                                    </Box>
                                </Typography>)
                                }

                            </Box>


                            <CustomBox>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 1, }}>

                                    <Typography variant='h6' sx={{ fontWeight: '700', fontSize: '12px', color: "#17275F", textAlign: 'center' }}>
                                        {item?.startDate?.split('T')[0]} To {item?.endDate?.split('T')[0]}
                                    </Typography>

                                    <Typography variant='h6' sx={{ fontWeight: '700', fontSize: '12px', color: "#17275F", textAlign: 'center' }}>
                                        from {item?.source}
                                    </Typography>

                                    {item?.source === 'package' ? <Typography variant='h6' sx={{ fontWeight: '700', fontSize: '12px', color: "#17275F", textAlign: 'center' }}>
                                        {item?.category}
                                    </Typography> : ''}
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    {/* <Stack direction='row' spacing={1}>

                                        <Tooltip title='view the details'>
                                            <IconButton>
                                                <RemoveRedEyeSharpIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack> */}

                                    <BookingExtending
                                        bookingid={item?._id}
                                        bookingEndDate={item?.endDate}
                                        booked={item?.booked}
                                        source={item?.source}
                                        perdayrate={item?.totalPerDayRate}
                                        packageamount={item?.total}
                                        phone={item?.bookingAddress?.Phonenumber}

                                    />
                                   
                                    <CancelBookingModal
                                    bookingid={item?._id}
                                    bookingEndDate={item?.endDate}
                                    booked={item?.booked}
                                    source={item?.source}
                                    perdayrate={item?.totalPerDayRate}
                                    userId={userId}
                                    startDate={item?.startDate}
                                    isNotActive={currentDate > new Date(item?.endDate ? item?.endDate : '') || !item?.status || !item?.booked}
                                    getAllBookings={getAllBookings}
                                />

                                
                                <AddReview 
                                userId={userId}
                                source={item?.source}
                                packageId={item?.packageId}
                                username={userName}
                                />
                               
                                </Box>

                            </CustomBox>

                        </Customcontainer>
                    ))

                )
            }


            <Box sx={{ alignItems: 'center', padding: '1rem' }}>
                <Stack spacing={2}>
                    <Pagination
                        count={Math.ceil(bookedItem?.length?(bookedItem?.length / itemsPerPage):0 )}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        Page {currentPage} of {Math.ceil(bookedItem?.length ? bookedItem?.length : 0 / itemsPerPage)}
                    </Typography>
                </Stack>
            </Box>


        </Box>



    )
}

export default ProfileAllBooking