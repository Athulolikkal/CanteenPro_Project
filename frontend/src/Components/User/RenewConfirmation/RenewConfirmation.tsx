import { useState,useEffect } from 'react';
import { Box, Typography, styled, Button, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
// import axios from '../../../Axios/axios'
import toast, { Toaster } from 'react-hot-toast';
import { sentOtp } from '../../../Firebase/Otp/Otp';
import { razorpayPaymentIntegration } from '../Payment/Razorpay/Razorpay';

const ContainerBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
}));

const RenewConfirmation = () => {
    const [isSent, setisSent] = useState<boolean>(false)
    const [isConfirm, setIsConfirm] = useState<any>(null)
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    const { state } = location
    const { phone, bookingId, newEndDate, actualEndDate, active, count, renewBookingAmount, newStartDate, source } = state || {}
    const num = "+91" + phone
    const url = '/booking/renewbooking'

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            // Clean up the script tag when the component unmounts
            document.body.removeChild(script);
        };
    }, [])

    const renewBooking = async () => {
        try {
            const confirmation = await sentOtp(num)
            if (confirmation) {
                setIsConfirm(confirmation)
                setisSent(true)
            } else {
                toast.error('faild to sent OTP....try after sometimes')
            }

        } catch (err) {
            console.log(err);
            toast.error('faild to sent OTP...please try after sometimes')
        }
        // const extendingBooking = await axios.post('/booking/renewbooking', { newEndDate, active, actualEndDate, bookingId, source, count, renewBookingAmount, newStartDate })
    }

    const verifyOtp = async () => {
        try {
            await isConfirm.confirm(otp)
            console.log('otp verified')
            toast('otp verified', {
                icon: '👏',
            });
            
           await razorpayPaymentIntegration(newEndDate, active, actualEndDate, bookingId, source, count, renewBookingAmount, newStartDate, url, phone,navigate)
            
        } catch (err) {
            // console.log(err,'error on otp verification');
            toast.error("incorrect otp")
        }
    }

    return (
        <Box>
            <Toaster
                position="top-left"
                reverseOrder={false}
            />
            <ContainerBox>
                <Box
                    sx={{
                        backgroundColor: '#17275F',
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        borderRadius: '15px',
                        padding: '2rem',
                    }}
                >
                    <Typography sx={{ textAlign: "center", color: "white", fontWeight: 700, fontSize: '24px' }}>
                        OTP Verification
                    </Typography>
                    <Typography sx={{ textAlign: "center", color: "white", fontWeight: 400, fontSize: '16px', marginTop: '0.5rem' }}>
                        Verify your phone number : +91{phone}
                    </Typography>


                    {isSent ? null : (
                        <div id='recaptcha'></div>
                    )}

                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <TextField
                            label="Enter OTP"
                            variant="standard"
                            size="small"
                            InputLabelProps={{
                                style: {
                                    color: '#E4E4E4',
                                    fontSize: '16px',
                                }
                            }}
                            InputProps={{
                                style: {
                                    color: 'white',
                                }
                            }}
                            inputProps={{ maxLength: 6 }}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </Box>



                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    {isSent ? (<Button variant="contained" color="primary" onClick={verifyOtp} >confirm Otp</Button>) :
                        (<Button variant="contained" color="primary" onClick={renewBooking}>Click here to sent OTP</Button>)}
                </Box>

            </ContainerBox>
        </Box>
    )
}

export default RenewConfirmation