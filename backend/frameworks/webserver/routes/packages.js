import packagesController from "../../../adapters/controllers/packages.js";
import packageInterfacerepositories from "../../../applications/repositories/packageInterfacerepositories.js";
import packagesDbrepositories from "../../database/mongoDB/repositories/packagesMongoDbrepository.js";
import jwtAuthentication from "../middlewares/jwtauthenticationuser.js";
import jwtAuthenticationCanteen from "../middlewares/jwtAuthenticationCanteen.js";

export default function packageRouter(express) {
  const router = express.Router();
  const controller = packagesController(
    packageInterfacerepositories,
    packagesDbrepositories
  )

  router.route('/addpackages').post(controller.addPackages)
  router.route('/getpackages').get(jwtAuthenticationCanteen, controller.getPackages)
  router.route('/allpackages').get(controller.getAllPackages)
  router.route('/viewpackge').get(controller.findPackagebyId)
  router.route('/removepackage').patch(controller.removePackage)
  router.route('/fetchallpackages').get(jwtAuthentication, controller.fetchAllPackagesforSearch)
  router.route('/customisepackage').get(jwtAuthentication, controller.fetchByCategory)
  router.route('/canteentotalpackages').get(controller.totalNumberOfCanteenPackages)
  router.route('/totalpackagedetails').get(controller.getCanteenPackageDetailsForDashboard)
  router.route('/addreview').post(controller.addUserReview)
  return router;
}