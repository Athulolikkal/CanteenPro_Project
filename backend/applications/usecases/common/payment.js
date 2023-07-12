export default async function payment(amount, paymentServices) {
    try {
         const verifyRazorpay=await paymentServices.razorpayPaymentService(amount)
         return verifyRazorpay
    } catch (err) {
        console.log(err, 'error found on payment usecase')
    }
}