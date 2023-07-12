import wishController from '../../../adapters/controllers/wish.js'
import wishInterfacerepositories from '../../../applications/repositories/wishInterfacerepositories.js';
import wishDbrepositories from '../../database/mongoDB/repositories/wishMongoDbrepository.js';
import jwtAuthentication from "../middlewares/jwtauthenticationuser.js";
import paymentServiceInterface from '../../../applications/service/paymentServiceInteface.js'
import paymentServices from '../../service/paymentServices.js';

export default function wishRouter(express) {
    const router = express.Router();
    const controller = wishController(
        wishInterfacerepositories,
        wishDbrepositories,
        paymentServiceInterface,
        paymentServices
    )


    router.route('/addtowish').post(jwtAuthentication,controller.addToWish)
    router.route('/getwish').get(jwtAuthentication,controller.fetchUserwishes)
    router.route('/removeitem').delete(jwtAuthentication,controller.removeWish)
    router.route('/wishitemdetails').get(controller.findWishDetailsById)
    router.route('/payment').post(controller.isPayment)
    router.route('/paymentsuccess').post(controller.isPaymentDone)
    return router;
}