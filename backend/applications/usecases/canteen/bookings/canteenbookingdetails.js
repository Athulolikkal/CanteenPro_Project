export default async function getBookingOfCanteen(canteenId, name, bookingDb) {
    try {

        const newDate = new Date()
        const formattedDate = newDate.toISOString();

        const breakfast = 'breakfast';
        const dinner = 'dinner';
        const lunch = 'lunch';

        const customizedBreakfasts = await bookingDb.AllBookingsCustomized(name, breakfast)
        const customizedLunch = await bookingDb.AllBookingsCustomized(name, lunch)
        const customizedDinner = await bookingDb.AllBookingsCustomized(name, dinner)
        const itemsBookedFromPackage = await bookingDb.AllBookingsOfPackages(canteenId)
        const totalCustomizedBookings = parseInt(customizedBreakfasts.length + customizedLunch.length + customizedDinner.length)
        const totalBookings = parseInt(itemsBookedFromPackage.length + totalCustomizedBookings)
        console.log(totalBookings, 'totalbookings are');

        const totalCustomizedAmountIs = (array, value) => {
            let totalAmount = 0
            for (let i = 0; i < array.length; i++) {
                totalAmount = totalAmount + parseInt(array[i][value].ratePerDay)
            }
            return totalAmount
        }

        const totalPackagesAmountIs = (array) => {
            let totalAmount = 0
            for (let i = 0; i < array.length; i++) {
                totalAmount = totalAmount + parseInt(array[i].bookingAmount)
            }
            return totalAmount
        }

        const totalBreakfastAmount = await totalCustomizedAmountIs(customizedBreakfasts, 'breakfast')
        const totalLunchAmount = await totalCustomizedAmountIs(customizedLunch, 'lunch')
        const totalDinnerAmount = await totalCustomizedAmountIs(customizedDinner, 'dinner')
        const totalPackageBookingAmount = await totalPackagesAmountIs(itemsBookedFromPackage)
        const totalRevenuAmount = parseInt(totalBreakfastAmount + totalLunchAmount + totalDinnerAmount + totalPackageBookingAmount)
        console.log(totalRevenuAmount);
        return { totalAmount: totalRevenuAmount, totalBooking: totalBookings, packageBooked: itemsBookedFromPackage.length, customizedBooking: totalCustomizedBookings }



    } catch (err) {
        console.log(err);
    }
}