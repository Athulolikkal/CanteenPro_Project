import bookingEntity from '../../../../entities/booking.js'

export default async function addBooking(wish, wishId, bookingDb, wishDb, userDb) {
    try {
        console.log(wish);
        const userDetails = await userDb.getUserData(wish?.userId)
        const userAddress = userDetails?.bookingAddress
        wish.userAddress=userAddress
        const bookingDetails = bookingEntity(wish);
        console.log(userAddress, 'userAddress is this');
        const activeBookings = await bookingDb.findActiveBookings(wish?.userId,wish?.EndDate)
        console.log(activeBookings, 'activebookings');
        if (activeBookings <= 4) {
            const isItemBooked = await bookingDb.insertBooking(bookingDetails)
            return { status: true, booked: isItemBooked }
        } else {
            return { status: false }
        }


    } catch (err) {
        console.log(err, 'err on usecase');
    }

}