// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { Box, Typography } from '@mui/material';

// const BookingFromWish = () => {
//   const navigate = useNavigate();
//   const currentDate = Date.now();
//   const [value, setValue] = useState<Dayjs | null>(dayjs(currentDate + 86400000)); // Adding 86400000 milliseconds (1 day) to the current date
//   const [endDate, setEndDate] = useState<Date | null>(); // Adding 86400000 milliseconds (1 day) to the current date
//   const [startDate, setStartDate] = useState<Date | null>(); // Adding 86400000 milliseconds (1 day) to the current date
//   const [count, setCount] = useState<number>(0)
//   const bookingItem = useSelector((state: any) => state.wishDetails);

//   useEffect(() => {
//     if (bookingItem?.data === undefined) {
//       navigate('/');
//     }
//   }, [bookingItem, navigate]);

//   const minDate = dayjs().add(1, 'day'); // Minimum selectable date (1 day after the current date)
//   const maxDate: Dayjs | undefined = value ? value.add(30, 'day') : undefined; // Maximum selectable date (30 days after the starting date)



//   const handleEndDateChange = (newValue: Dayjs | null) => {
//     const Enddate = newValue?.toDate()
   
//     setEndDate(Enddate)
//     console.log(endDate,startDate, 'endDate');

//   }
//   const handleStartDateChange = (newValue: Dayjs | null) => {
//     const Startdate = newValue?.toDate()
   
//     setStartDate(Startdate)
//     console.log(startDate,endDate, 'endDate');



//   }

//   return (
//     <>
//       <Box sx={{ marginTop: '5rem', width: '100%' }}>
//         <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//           <Box>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DemoContainer components={['DatePicker', 'DatePicker']}>
//                 <DatePicker
//                   label="StartDate"
//                   value={value}
//                   onChange={handleStartDateChange}
//                   minDate={minDate}
//                   maxDate={maxDate}

//                 />
//                 <DatePicker
//                   label="EndDate"
//                   minDate={value ? value.add(5, 'day') : undefined} // Minimum selectable date is 5 days after the start date
//                   maxDate={maxDate} // Maximum selectable date is 30 days after the starting date
//                   onChange={handleEndDateChange}
//                 />
//               </DemoContainer>
//             </LocalizationProvider>

//           </Box>



//         </Box>
//         <Typography>selected days are:</Typography>
//       </Box>

//     </>
//   );
// };

// export default BookingFromWish;
