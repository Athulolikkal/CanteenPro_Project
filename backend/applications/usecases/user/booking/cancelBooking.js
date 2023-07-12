export default async function cancelBooking(bookingId, newEndDate, refundedAmount, count, userId, bookingDb) {
    try {
        // console.log(bookingId, newEndDate, refundedAmount, count, userId);
        const booking = await bookingDb.getBookingById(bookingId)
        // console.log(booking,'booking is');
        const newTotalDays = booking.totalDays - count
        const newBookingAmount = booking.bookingAmount - refundedAmount
        const cancelBooking = await bookingDb.cancelUserBooking(bookingId, newTotalDays, newEndDate, newBookingAmount)
        console.log(cancelBooking, 'cancelBooking');
       
        if (cancelBooking) {
            return { status: true }
        } else {
            return { status: false }
        }
    } catch (err) {
        console.log(err);
    }
}