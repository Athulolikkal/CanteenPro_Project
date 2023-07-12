import addPackagesUsecase from "../../applications/usecases/canteen/packages/addPackage.js";
import getPackagesOfCanteen from "../../applications/usecases/canteen/packages/getPackagesOfCanteen.js";
import getAllPackagesOfCanteen from '../../applications/usecases/canteen/packages/getAllPackagesOfCanteens.js'
import getPackagesById from "../../applications/usecases/canteen/packages/getPackageById.js";
import removePackageById from "../../applications/usecases/canteen/packages/removePackageById.js";
import fetchallpackages from "../../applications/usecases/user/packages/fetchAllPackages.js";
import fetchPackagesByCategory from '../../applications/usecases/user/packages/fetchPackagesByCategory.js'
import findTotlPackagesOfCanteen from '../../applications/usecases/canteen/packages/totalNumberOfPackagesOfCanteen.js'
import findPackageDetailsOfCanteen from '../../applications/usecases/canteen/packages/findPackagesCountOfCanteen.js'
import addReviewUsecase from "../../applications/usecases/user/packages/addReview.js";

export default function packages(
    packagesRepositoriesInterface,
    packagesRepositoriesImplements,
) {

    const packageDb = packagesRepositoriesInterface(packagesRepositoriesImplements())

    const addPackages = (req, res) => {
        const packageDetails = req.body
        addPackagesUsecase(packageDetails, packageDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))

    }

    const getPackages = (req, res) => {

        const pageNumber = req?.query?.pageNumber || 1
        const canteenId = req?.query?.id
        getPackagesOfCanteen(canteenId, packageDb, pageNumber).then((response) => {
            // console.log(response, 'responseeeeeeeeee')
            res.json({ response })
        }).catch((err) => console.log(err))

    }
    const getAllPackages = (req, res) => {

        getAllPackagesOfCanteen(packageDb).then((response) => {

            res.json({ response })
        }).catch((err) => console.log(err))
    }

    const findPackagebyId = (req, res) => {

        getPackagesById(req?.query?.id, packageDb).then((response) => {
            res.json({ response })
        }).catch((err) => console.log(err))

    }

    const removePackage = (req, res) => {

        removePackageById(req?.query?.id, packageDb).then((response) => {

            res.json(response)
        }).catch((err) => console.log(err))
    }

    const fetchAllPackagesforSearch = (req, res) => {
        const { pageNumber, searchValue } = req?.query

        fetchallpackages(pageNumber, searchValue, packageDb).then((response) => {

            res.json(response)
        }).catch((err) => console.log(err, 'error happend when fetching all packages'))
    }

    const fetchByCategory = (req, res) => {
        const { pagenumber, menu, search } = req?.query
        fetchPackagesByCategory(pagenumber, menu, search, packageDb).then((response) => {
            console.log(response);
            res.json(response)
        }).catch((err) => console.log(err))
    }

    const totalNumberOfCanteenPackages = (req, res) => {
        const { id } = req?.query
        console.log(id, 'canteenId');
        findTotlPackagesOfCanteen(id, packageDb).then((response) => {
            res.json(response)
        }).catch((err) => {
            console.log(err);
        })
    }

    const getCanteenPackageDetailsForDashboard = (req, res) => {
        const { canteenId } = req?.query
        findPackageDetailsOfCanteen(canteenId, packageDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))

    }

    const addUserReview = (req, res) => {
        const { userId, packageId,username,message } = req?.body
        addReviewUsecase(userId, packageId,username,message,packageDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }

    return {
        addPackages,
        getPackages,
        getAllPackages,
        findPackagebyId,
        removePackage,
        fetchAllPackagesforSearch,
        fetchByCategory,
        totalNumberOfCanteenPackages,
        getCanteenPackageDetailsForDashboard,
        addUserReview

    }
}