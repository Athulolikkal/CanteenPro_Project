import bookingController from "../../../adapters/controllers/booking.js";
import bookingImplementsMongoDb from "../../database/mongoDB/repositories/bookingMongoDbrepository.js";
import bookingInterfaceRepository from "../../../applications/repositories/bookingInterfacerepository.js";
import wishInterfacerepositories from "../../../applications/repositories/wishInterfacerepositories.js";
import wishDbrepositories from "../../database/mongoDB/repositories/wishMongoDbrepository.js";
import jwtAuthenticationCanteen from "../middlewares/jwtAuthenticationCanteen.js";
import userImplementsMongoDb from "../../database/mongoDB/repositories/userMongoDbrepository.js";
import userInterfaceMongoDb from  '../../../applications/repositories/userInterfacerepositories.js'


export default function bookingRouter(express) {
    const router = express.Router();
    const controller = bookingController(
        bookingImplementsMongoDb,
        bookingInterfaceRepository,
        wishInterfacerepositories,
        wishDbrepositories,
        userImplementsMongoDb,
        userInterfaceMongoDb

    )

    router.route('/addbooking').post(controller.addBooking)
    router.route('/confirmbooking').patch(controller.confirmbooking)
    router.route('/getAllbooking').get(jwtAuthenticationCanteen,controller.getAllBookingOfCanteen)
    router.route('/dashboarddetails').get(jwtAuthenticationCanteen,controller.getDetails)
    router.route('/getalluserbooking').get(controller.getAllBookingsOfUser)
    router.route('/renewbooking').post(controller.reNewBooking)
    router.route('/cancelbooking').post(controller.cancelBooking)
    return router;
}