import addBookingUsecase from "../../applications/usecases/user/booking/addBooking.js";
import confirmBookingUsecase from "../../applications/usecases/user/booking/confirmBooking.js";
import getAllBookingOfCanteenUseCase from "../../applications/usecases/canteen/bookings/getallbookingofcanteen.js";
import canteenBookingDetailsOfCanteenUsecase from "../../applications/usecases/canteen/bookings/canteenbookingdetails.js";
import allBookingOfUserUsecase from "../../applications/usecases/user/booking/getAllUserBooking.js"
import reNewBookingUseCase from "../../applications/usecases/user/booking/reNewBooking.js";
import cancelBookingUsecase from "../../applications/usecases/user/booking/cancelBooking.js";

export default function bookingController(
    bookingImplementsMongoDb,
    bookingInterfaceRepository,
    wishInterfacerepositories,
    wishDbrepositories,
    userImplementsMongoDb,
    userInterfaceMongoDb
) {
    const bookingDb = bookingInterfaceRepository(bookingImplementsMongoDb())
    const wishDb = wishInterfacerepositories(wishDbrepositories())
    const userDb = userInterfaceMongoDb(userImplementsMongoDb())

    const addBooking = (req, res) => {
        const packageDetails = req?.body
        const wishId = req?.body?._id
        addBookingUsecase(packageDetails, wishId, bookingDb, wishDb, userDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }
    const confirmbooking = (req, res) => {

        const bookingId = req?.body?.bookingId;
        confirmBookingUsecase(bookingId, bookingDb).then((response) => {
            res.json({ status: true })
        }).catch((err) => {
            console.log(err);
        })
    }

    const getAllBookingOfCanteen = (req, res) => {
        const { canteenId, name, category, date } = req?.query
        getAllBookingOfCanteenUseCase(canteenId, name, category, date, bookingDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }

    const getDetails = (req, res) => {
        const { canteenId, name } = req?.query;
        canteenBookingDetailsOfCanteenUsecase(canteenId, name, bookingDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))

    }

    const getAllBookingsOfUser = (req, res) => {
        const { userId } = req?.query
        allBookingOfUserUsecase(userId, bookingDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }

    const reNewBooking = (req, res) => {
        //   console.log('call comes to controller');
        const { newEndDate, active, actualEndDate, bookingId, source, count, renewBookingAmount, newStartDate, } = req?.body
        reNewBookingUseCase(newEndDate, active, actualEndDate, bookingId, source, count, renewBookingAmount, newStartDate, bookingDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }

    const cancelBooking = (req, res) => {
        const { bookingid, newEndDate, refundedAmount, count, userId } = req?.body
        cancelBookingUsecase(bookingid, newEndDate, refundedAmount, count, userId, bookingDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))

    }

    return {
        addBooking,
        confirmbooking,
        getAllBookingOfCanteen,
        getDetails,
        getAllBookingsOfUser,
        reNewBooking,
        cancelBooking
    }
}