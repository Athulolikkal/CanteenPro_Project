import authController from '../../../adapters/controllers/authentication.js'
import authDbrepositories from '../../../applications/repositories/authDbrepositories.js';
import authDbrepositoriesMongoDb from '../../database/mongoDB/repositories/authDbrepositoryMongoDb.js';
import authSerivecsImp from '../../service/authServices.js';
import authServicesInter from '../../../applications/service/authServiceInter.js';

export default function registerRouter(express) {
    const router = express.Router();

    const controller = authController(
        authDbrepositories,
        authDbrepositoriesMongoDb,
        authSerivecsImp,
        authServicesInter
    )
    router.route('/').post(controller.registerUser)
    router.route('/googlesignup').post(controller.googleSignup)
    router.route('/canteensignup').post(controller.canteenSignup)

    return router;
}