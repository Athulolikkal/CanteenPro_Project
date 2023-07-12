import userController from "../../../adapters/controllers/user.js";
import userRepoInterface from '../../../applications/repositories/userInterfacerepositories.js';
import userRepoImplements from '../../database/mongoDB/repositories/userMongoDbrepository.js';


export default function userRouter(express) {
    const router = express.Router();
    
    const controller = userController(
        userRepoImplements,
        userRepoInterface
    )

    router.route('/adduseraddress').put(controller.addUserBookingAddress)
    router.route('/userdata').get(controller.getUserData)
    router.route('/addtowallet').put(controller.addToUserWallet)
    router.route('/updateprofileimage').put(controller.updateProfileImage)
    return router
}