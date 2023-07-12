import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, IconButton, Tooltip } from '@mui/material';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import swal from 'sweetalert';
import axios from '../../../Axios/axios'
import toast, { Toaster } from 'react-hot-toast';

interface Props {
  bookingid?: string;
  bookingEndDate?: string;
  booked?: boolean;
  source?: string;
  perdayrate?: number;
  userId?: string;
  startDate?: string;
  isNotActive?: boolean;
  getAllBookings: () => Promise<void>
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const CancelBookingModal: React.FC<Props> = ({ bookingid, bookingEndDate, booked, source, perdayrate, userId, startDate, isNotActive, getAllBookings }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const currentDate = new Date()
  const currentHour = currentDate?.getHours();
  const validTime = currentHour < 18
  const newCurrentDate = validTime ? currentDate : new Date(currentDate.setDate(currentDate.getDate() + 1));
  const bookingLastDate = new Date(bookingEndDate ? bookingEndDate : '')
  const perdayRate = perdayrate ? perdayrate : 0

  const remainingDays = () => {
    const endDate = bookingLastDate
    const cancelingDate = newCurrentDate

    endDate.setHours(0, 0, 0, 0)
    cancelingDate.setHours(0, 0, 0, 0)
    const timeDiff = endDate.getTime() - cancelingDate.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff
  }

  const cancelbooking = async () => {
    try {
      const willContinue = await swal({
        title: 'Are you sure',
        text: 'Are you sure do you want to cancel booking ',
        icon: 'info',
      })
      if (willContinue) {


        const cantcancel = currentDate < new Date(startDate ? startDate : '') || isNotActive
        // console.log(currentDate < new Date(startDate ? startDate : ''), 'is not started');
        // console.log(isNotActive, 'isnotactive');
        // console.log(cantcancel, 'cant cancel?');
        if (cantcancel) {
          toast.error("can't cancel the booking...currently its not activeted")
        } else {
          // console.log('can cancel');
          const timezoneOffsetMs = newCurrentDate.getTimezoneOffset() * 60000; // Get local timezone offset in milliseconds
          const utcDateMs = newCurrentDate.getTime() - timezoneOffsetMs; // Subtract the offset from the local midnight time

          const utcDate = new Date(utcDateMs);
          const formattedDate = utcDate.toISOString().slice(0, 19) + '.000+00:00';
          const count = await remainingDays()
          const refundedamount = count * perdayRate


          const details = {
            bookingid: bookingid,
            newEndDate: formattedDate,
            refundedAmount: refundedamount,
            count: count,
            userId: userId
          }

          const isCancelled = await axios.post('/booking/cancelbooking', details)
          if (isCancelled?.data?.status === true) {
            const addToWallent = await axios.put('/user/addtowallet', { userId, refundedamount })
            if (addToWallent?.data?.status === true) {
              handleClose()
              getAllBookings()
              toast.success('amount added to your wallet....')


            } else {
              handleClose()
              toast.error("faild to add refunded amount to your wallet")
            }
          } else {
            handleClose()
            toast.error("something went wrong...try after some times")
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Toaster
        position="top-left"
        reverseOrder={false}
      />
      <Tooltip title="cancel the booking">
        <IconButton onClick={handleOpen}>
          <CancelSharpIcon />
        </IconButton>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontWeight: 700, color: '#17275F', textAlign: 'center' }}>
            Cancel Your Booking<span style={{ fontSize: '36px', fontWeight: 800 }}>!</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
            Booking ending on : <span style={{ fontWeight: 700 }}>{bookingLastDate.toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}</span><br />
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>Booking canceling from : <span style={{ fontWeight: 800, color: '#17275F' }}>{newCurrentDate.toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}</span>
          </Typography>
          {remainingDays() > 0 && (
            <>
              <Typography sx={{ textAlign: 'center' }}>
                Cancel total days: <span style={{ fontWeight: 700 }}>{remainingDays()}</span> days
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>
                Booking perday rate: <span style={{ fontWeight: 700 }}>{perdayRate}</span>
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>
                Refunded amount: <span style={{ fontWeight: 800, color: '#17275F' }}>{remainingDays() * perdayRate}</span>
              </Typography>
            </>
          )}
          <Button variant='outlined' sx={{ width: '100%', marginTop: '1rem' }} onClick={cancelbooking}>
            Cancel Booking
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default CancelBookingModal