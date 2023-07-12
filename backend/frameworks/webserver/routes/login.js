import authController from '../../../adapters/controllers/authentication.js'
import authDbrepositories from '../../../applications/repositories/authDbrepositories.js';
import authDbrepositoriesMongoDb from '../../database/mongoDB/repositories/authDbrepositoryMongoDb.js';
import authSerivecsImp from '../../service/authServices.js';
import authServicesInter from '../../../applications/service/authServiceInter.js';


export default function loginRouter(express){
    const router=express.Router();
    const controller=authController(
        authDbrepositories,
        authDbrepositoriesMongoDb,
        authSerivecsImp,
        authServicesInter
    )
    router.route('/').post(controller.loginUser)
    router.route('/googlelogin').post(controller.googlelogin)
    router.route('/canteenlogin').post(controller.canteenLogin)

    return router
}