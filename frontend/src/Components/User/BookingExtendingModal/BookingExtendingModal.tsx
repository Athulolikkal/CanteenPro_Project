import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Button, IconButton, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

interface Props {
  bookingid?: string;
  bookingEndDate?: string;
  booked?: boolean;
  source?: string;
  perdayrate?: number;
  packageamount?: number;
  phone?: string;

}

const style = {

  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: 5

};




const BookingExtending: React.FC<Props> = ({ bookingid, bookingEndDate, booked, source, perdayrate, packageamount, phone }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const currentDate = dayjs().add(1, 'day');
  const todayDate = dayjs();
  const endDateTime = dayjs(bookingEndDate);
  const newDate = booked && endDateTime.isAfter(currentDate) ? endDateTime : currentDate;
  const hideDateBefore = dayjs(newDate)
  const [value, setValue] = useState<Dayjs | null>(dayjs(newDate).add(1, 'day'));
  const activeBooking = booked && (endDateTime.isAfter(todayDate) || endDateTime.isSame(todayDate)) ? true : false;
  const startDate = booked && activeBooking ? value : currentDate
  const [startingDate, setStartingDate] = useState<Dayjs | null>(dayjs(startDate))
  const [count, setCount] = useState<number>(1)
  const navigate = useNavigate()

  const handleDateChange = (date: Dayjs | null) => {
    setValue(date);
  };

  const shouldDisableDate = (date: Dayjs) => {
    return date.isBefore(hideDateBefore!, 'day');
  };



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      const willContinue=await swal({
        title:'Are you sure',
        text:'Are you sure do you want to confirm your re-new',
        icon:'info',
      })
      if(willContinue){
      
        const isdate: any = value?.toDate();
  
        const reNewedDate = dayjs(isdate).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        const reNewedStartingDate = startingDate?.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
  
        console.log(reNewedStartingDate, 'renewed starting date');
        const isPerdayRateAmount = await totalPayableAmount()
        const renewBookingAmount = source === 'package' && count === 30 ? packageamount : isPerdayRateAmount
  
  
        const Details = {
          newEndDate: reNewedDate,
          actualEndDate: bookingEndDate,
          active: activeBooking,
          count: count,
          renewBookingAmount: renewBookingAmount,
          newStartDate: reNewedStartingDate,
          phone: phone,
          bookingId: bookingid,
          source: source
  
        }
  
        navigate('/user/renewbookingconfirm', {
          state: Details
        })
      }
      } catch (err) {
      console.log(err, 'err when renewing');
    }
  }

  const totalPayableAmount = () => {
    const rate = parseInt(perdayrate?.toString() || '0');
    const amount = rate * count;

    return amount
  }

  useEffect(() => {
    const endingDate = value
    const remainingDays = endingDate?.diff(startingDate, 'day');
    setCount(remainingDays ? remainingDays + 1 : 1)
    // const amount = totalPayableAmount()

  }, [value])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <Tooltip title="re-new booking">
        <IconButton onClick={handleOpen}>
          <AutorenewIcon />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: '700', textAlign: 'center' }}>
            Renew Your Booking
          </Typography>
          <form onSubmit={handleSubmit}>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>

                <DatePicker label="Renewing From" value={startingDate} readOnly />
                <DatePicker
                  label="Renewing To"
                  value={value}
                  onChange={handleDateChange}
                  shouldDisableDate={shouldDisableDate}
                />

              </DemoContainer>
              <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 700, marginTop: '1rem' }}>Total Days:<span style={{ color: '#17275F', fontSize: '16px', fontWeight: 800 }}> {count}</span></Typography>
              <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 700 }}>Total PerDay Rate:<span style={{ color: '#17275F', fontSize: '16px', fontWeight: 800 }}> {perdayrate}</span></Typography>
              {source === 'package' ? <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 700 }}>Package Amount:<span style={{ color: '#17275F', fontSize: '16px', fontWeight: 800 }}> {packageamount}</span></Typography> : ''}
              {source === 'package' && count === 30 ? (<Typography sx={{ textAlign: 'center', fontSize: '16px', fontWeight: 700 }}>Payable Amount:<span style={{ color: '#17275F', fontSize: '18px', fontWeight: 800 }}>{packageamount}</span></Typography>) :
                (<Typography sx={{ textAlign: 'center', fontSize: '16px', fontWeight: 700 }}>Payable Amount:<span style={{ color: '#17275F', fontSize: '18px', fontWeight: 800 }}> {totalPayableAmount()}</span></Typography>)}
            </LocalizationProvider>
            <Button type='submit' variant='outlined' sx={{ marginTop: '1rem', width: '100%' }}>Confirm</Button>
          </form>
        </Box>

      </Modal>
    </div>
  )
}

export default BookingExtending