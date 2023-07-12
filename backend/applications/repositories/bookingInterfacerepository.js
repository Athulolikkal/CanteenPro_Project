export default function bookingInterfaceRepository(repositories) {
    const insertBooking = (wish) => repositories.insertBooking(wish)
    const findActiveBookings = (id, endDate) => repositories.findActiveBookings(id, endDate)
    const confirmBooking = (id) => repositories.confirmBooking(id)
    const bookedItemsFromPackage = (canteenId, category, formattedDate) => repositories.bookedItemsFromPackage(canteenId, category, formattedDate)
    const findBookingsCustomized = (name, category, formattedDate) => repositories.findBookingsCustomized(name, category, formattedDate)
    const AllBookingsCustomized = (name, category) => repositories.AllBookingsCustomized(name, category)
    const AllBookingsOfPackages = (canteenId) => repositories.AllBookingsOfPackages(canteenId)
    const allUserBookings = (userId) => repositories.allUserBookings(userId)
    const getBookingById = (id) => repositories.getBookingById(id)
    const findByIdAndRenewBooking = (bookingId, bookingAmount, totalDays, newEndDate) => repositories.findByIdAndRenewBooking(bookingId, bookingAmount, totalDays, newEndDate)
    const findByIdAndRenewNonActiveBooking = (bookingId, bookingAmount, totalDays, newEndDate, newStartDate) => repositories.findByIdAndRenewNonActiveBooking(bookingId, bookingAmount, totalDays, newEndDate, newStartDate)
    const cancelUserBooking = (bookingId, newTotalDays, newEndDate, newBookingAmount) => repositories.cancelUserBooking(bookingId, newTotalDays, newEndDate, newBookingAmount)
    return {
        insertBooking,
        findActiveBookings,
        confirmBooking,
        bookedItemsFromPackage,
        findBookingsCustomized,
        AllBookingsCustomized,
        AllBookingsOfPackages,
        allUserBookings,
        getBookingById,
        findByIdAndRenewBooking,
        findByIdAndRenewNonActiveBooking,
        cancelUserBooking
    }
}