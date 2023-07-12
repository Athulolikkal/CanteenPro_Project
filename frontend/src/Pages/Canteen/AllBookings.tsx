import React, { useEffect, useState } from 'react'
import { Box,Typography } from '@mui/material'
import AllOrders from '../../Components/Canteen/AllOrders/AllOrders'
import CategoryPicker from '../../Components/Canteen/CategoryPicker/CategoryPicker'
import axios, { setAccessToken } from '../../Axios/axios'
import { useSelector } from 'react-redux'

interface Canteen {
    canteenInfo?: {
        canteenId?: string,
        canteenName?: string,
        email?: string,
        image?: string
    }
}


const AllBookings = () => {
    const currentDate = new Date().toString();

    const [menu, setMenu] = useState<string>('breakfast')
    const [selectedDate, setSelectedDate] = useState<string | undefined>(currentDate)
    const [bookings,setBookings]=useState([])
    const getCanteenId = useSelector((state: Canteen) => state.canteenInfo)
    const canteenId = getCanteenId?.canteenId
    const canteenName = getCanteenId?.canteenName
    console.log(canteenId, canteenName, 'cateenID is this ');

    const fetchAllOrders = async () => {
        try {

            setAccessToken('canteen')
            const allOrders = await axios.get(`/booking/getAllbooking?canteenId=${canteenId}&&name=${canteenName}&&category=${menu}&&date=${selectedDate}`)
           
             const bookedItems=allOrders.data
             setBookings(bookedItems)
             console.log(bookedItems,'bookedItems are');
             console.log(bookings);
             
            
       
            } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAllOrders()
    }, [menu, selectedDate])


    return (

        <>   <Box>
            <Typography variant='h5' sx={{mt:5,textAlign:'center',fontWeight:700}}>All Bookings</Typography>
        </Box>
            <Box sx={{backgroundColor:'#fff'}}>
                <Box sx={{marginTop:'1%'}}>
                    <CategoryPicker setMenu={setMenu} setSelectedDate={setSelectedDate} />
                </Box>
                <Box>
                    <AllOrders booking={bookings} menu={menu} />
                </Box>
            </Box>


        </>
    )
}

export default AllBookings