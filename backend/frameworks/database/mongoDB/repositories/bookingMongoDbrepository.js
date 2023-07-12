import mongoose from 'mongoose';
import bookingSchema from '../../../database/mongoDB/model/bookingSchema.js'
const ObjectId = mongoose.Types.ObjectId;

export default function bookingImplementsMongoDb() {
    const insertBooking = (wish) => {
        try {
            const newBooking = new bookingSchema({
                userId: wish?.getUserId(),
                packageId: wish?.getPackageId(),
                canteenId: wish?.getCanteenId(),
                source: wish?.getSource(),
                total: wish?.getTotal(),
                startDate: wish?.getStartDate(),
                endDate: wish?.getEndDate(),
                image: wish?.getImage(),
                totalPerDayRate: wish?.getTotalPerDayRate(),
                breakfast: wish?.getBreakfast(),
                lunch: wish?.getLunch(),
                dinner: wish?.getDinner(),
                bookingAmount: wish?.getTotalBookingAmount(),
                totalDays: wish?.getTotalBookingDays(),
                bookingAddress: wish?.getBookingAddress(),
                category: wish?.getCategory()

            })
            return newBooking.save()

        } catch (err) {
            console.log(err);
        }
    }

    const findActiveBookings = (id, date) => {
        try {
            const activeBookingCount = bookingSchema.find({
                userId: new ObjectId(id),
                status: true,
                booked: true,
                // endDate: { $gte: date}
            }).countDocuments().exec();
            return activeBookingCount;
        } catch (err) {
            console.log(err);
        }
    }

    const confirmBooking = (id) => {
        try {
            console.log(id, 'booking id is this');
            const bookingConfirmation = bookingSchema.findByIdAndUpdate(id, { booked: true })
            return bookingConfirmation
        } catch (err) {
            console.log(err);
        }
    }
    const findBookingsCustomized = (name, category, formattedDate) => {
        try {
            console.log(formattedDate, 'foramttedDate is this');
            const customizedBookings = bookingSchema.find({
                $and: [
                    { [`${category}.canteenName`]: name },
                    { endDate: { $gte: formattedDate } },
                    // { startDate: { $gte: formattedDate } },
                    { booked: true }
                ]
            }).select({ [category]: 1, _id: 1, bookingAmount: 1, endDate: 1, startDate: 1, bookingAddress: 1, source: 1 })
            return customizedBookings
        }
        catch (err) {
            console.log(err);
        }
    }

    const AllBookingsCustomized = (name, category) => {
        try {

            const customizedBookings = bookingSchema.find({
                $and: [
                    { [`${category}.canteenName`]: name },
                    { booked: true },
                    // { status: true }
                ]
            }).select({ [category]: 1, _id: 1, bookingAmount: 1, endDate: 1, startDate: 1, bookingAddress: 1, source: 1 })
            return customizedBookings
        }
        catch (err) {
            console.log(err);
        }
    }
    const AllBookingsOfPackages = (id) => {
        try {

            const customizedBookings = bookingSchema.find({
                $and: [
                    { canteenId: id },
                    { booked: true },
                    // { status: true }
                ]
            }).select({ _id: 1, bookingAmount: 1, endDate: 1, startDate: 1, bookingAddress: 1, source: 1 })
            return customizedBookings
        }
        catch (err) {
            console.log(err);
        }
    }

    const bookedItemsFromPackage = (idOfCanteen, category, formattedDate) => {
        try {

            const itemsBookedFromPackages = bookingSchema.find({
                $and: [
                    { canteenId: idOfCanteen },
                    { endDate: { $gte: formattedDate } },
                    // { startDate: { $gte: formattedDate } },
                    { booked: true }
                ]
            }).select({ [category]: 1, _id: 1, bookingAmount: 1, endDate: 1, startDate: 1, bookingAddress: 1, source: 1, category: 1 })

            return itemsBookedFromPackages

        } catch (err) {
            console.log(err);
        }
    }

    const allUserBookings = async (id) => {
        try {
            const allBookings = await bookingSchema.find({ userId: id })
            return allBookings
        } catch (err) {
            console.log(err);
        }
    }

    const getBookingById = async (packageId) => {
        try {
            const fetchBooking = await bookingSchema.findById(packageId)
            return fetchBooking
        } catch (err) {
            console.log(err);
        }
    }

    const findByIdAndRenewBooking = async (bookingId, bookingAmount, totalDays, newEndDate) => {
        try {
            console.log(newEndDate);
            const renewBooking = await bookingSchema.findByIdAndUpdate(bookingId, { bookingAmount: bookingAmount, totalDays: totalDays, endDate: newEndDate })
            await renewBooking.save();
            return renewBooking
        } catch (err) {
            console.log(err);
        }
    }
    const findByIdAndRenewNonActiveBooking = async (bookingId, bookingAmount, totalDays, newEndDate, newStartDate) => {
        try {
            console.log(newEndDate);
            const renewBooking = await bookingSchema.findByIdAndUpdate(bookingId, { bookingAmount: bookingAmount, totalDays: totalDays, endDate: newEndDate, startDate: newStartDate,cancelled:false })
            await renewBooking.save();
            return renewBooking
        } catch (err) {
            console.log(err);
        }
    }
    const cancelUserBooking=async(bookingId, newTotalDays,newEndDate,newBookingAmount)=>{
        try{
         const userBookingCancel = await bookingSchema.findByIdAndUpdate(bookingId,{bookingAmount:newBookingAmount,totalDays:newTotalDays,endDate:newEndDate,cancelled:true})
         return userBookingCancel
        }catch(err){
            console.log(err);
        }
    }

    return {
        insertBooking,
        findActiveBookings,
        confirmBooking,
        findBookingsCustomized,
        bookedItemsFromPackage,
        AllBookingsCustomized,
        AllBookingsOfPackages,
        allUserBookings,
        getBookingById,
        findByIdAndRenewBooking,
        findByIdAndRenewNonActiveBooking,
        cancelUserBooking

    }

}