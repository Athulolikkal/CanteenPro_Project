import Razorpay from 'razorpay';
import dotenv from 'dotenv';

export default function paymentServices() {

    const razorpayPaymentService = async (totalAmount) => {
        try {

            const razorpayInstance = new Razorpay({
                key_id: process.env.RAZORPAY_KEY_ID,
                key_secret: process.env.RAZORPAY_SECRET_ID
            });

            const order = await razorpayInstance.orders.create({
                amount: totalAmount * 100,
                currency: "INR",
                receipt: 'CNPO2322'
            });

            return { status: true, order }

        } catch (err) {
            console.log(err, 'error on razorpay payment services')
        }
    }




    return {
        razorpayPaymentService
    }

}