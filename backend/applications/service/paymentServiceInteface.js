export default function paymentServices(repositories) {
    const razorpayPaymentService = (amount) => repositories.razorpayPaymentService(amount)

    return {
        razorpayPaymentService
    }
}