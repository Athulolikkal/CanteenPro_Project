import commonServicesControllers from "../../../adapters/controllers/commonServices.js";

export default function commonServices(express){
    const router=express.Router();
    const controller=commonServicesControllers()

router.route('/s3service').get(controller.s3bucketFileUpload)

return router
}