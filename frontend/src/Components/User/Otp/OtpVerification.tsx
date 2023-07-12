import { useEffect, useState } from 'react';
import { Box, Typography, styled, Button, TextField } from '@mui/material';
// import { auth } from '../../../Firebase/Firebase.config';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import userInfoReducer from '../../../redux/user/userInfoReducer';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from '../../../Axios/axios';
import { useSelector } from 'react-redux';
import { sentOtp } from '../../../Firebase/Otp/Otp';
const razorpay_key_id = import.meta.env.VITE_RAZORPAY_KEY_ID

const ContainerBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
}));



const OtpVerification = () => {


    const [otp, setOtp] = useState('')
    const [isConfirm, setConfirm] = useState<any>(null)
    const [isSent, setIsSent] = useState<boolean>(false)
    const location = useLocation();
    const { state } = location;
    const { phoneNumber, totalPayableAmount, userAddress, startDate, endDate, count } = state || {};
    const navigate = useNavigate()
    const num = "+91" + phoneNumber
    const bookingItem = useSelector((state: any) => state.wishDetails);
    const selectedPackage = { ...bookingItem.data }
    // console.log(selectedPackage, 'items found');

    selectedPackage.BookingAmount = totalPayableAmount,
        selectedPackage.StartingDate = startDate,
        selectedPackage.EndDate = endDate,
        selectedPackage.TotalBookingDays = count,



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


    const sentOtpToUser = async () => {
        try {
            const confirmation = await sentOtp(num)
            if (confirmation) {
                setConfirm(confirmation)
                setIsSent(true)
            } else {
                toast.error("failed to sent otp")
            }
        } catch (err) {
            toast.error("failed to sent otp")
        }
    }


    const verifyOtp = async () => {
        try {
            // console.log(isConfirm);
            await isConfirm.confirm(otp)

            // console.log('otp verified')
            toast('otp verified', {
                icon: '👏',
            });

            const total = { totalPayableAmount }
            const packagebooking = await axios.post('/booking/addbooking', selectedPackage)

            if (packagebooking?.data?.status === true) {
                const isPayment = await axios.post('/wish/payment', total)
                const orderId = isPayment?.data?.order?.id
                const bookingId = packagebooking?.data?.booked?._id
                // console.log(bookingId, 'bookingId');

                //payment integration 

                const options = {
                    key: razorpay_key_id,
                    amount: totalPayableAmount * 100,
                    currency: 'INR',
                    name: 'CanteenPro',
                    description: 'Complete canteen for all of them',
                    order_id: orderId,
                    handler: (response: any) => {

                        axios.patch('/booking/confirmbooking', { bookingId }).then((response) => {

                            if (response?.data?.status === true) {
                                navigate('/user/paymentsuccess')
                            }
                        }).catch((err) => console.log(err));
                    },
                    prefill: {
                        name: userAddress?.Name,
                        city: userAddress?.City,
                        contact: userAddress?.Phonenumber,
                    },
                    notes: {
                        address: userAddress?.District
                    },
                    theme: {
                        color: "#3399cc"
                    }
                };

                const rzp = new window.Razorpay(options);
                rzp.open();
            } else {
                toast.error("can't book now, you have many active plans now!")
            }


        } catch (err) {
            console.log(err)
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
                        Verify your phone number
                    </Typography>
                    {/* <div id='recaptcha'></div> */}

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
                    {isSent ? <Button variant="contained" onClick={verifyOtp} color="primary">Confirm OTP</Button> : <Button variant="outlined" onClick={sentOtpToUser} color="primary">click here to sent OTP to your address number </Button>}

                </Box>

            </ContainerBox>
        </Box>
    );
};

export default OtpVerification;




