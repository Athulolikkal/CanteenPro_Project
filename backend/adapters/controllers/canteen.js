import getAllCanteens from "../../applications/usecases/common/getAllCanteens.js";
import editProfileUsecase from '../../applications/usecases/canteen/canteenDetails/editprofile.js';
import getDetailsUsecase from '../../applications/usecases/canteen/canteenDetails/getDetails.js'

export default function canteenController(
    canteenMongoInterface,
    canteenMongoImplements
) {

    const canteenDb = canteenMongoInterface(canteenMongoImplements())

    const viewAllCanteens = (req, res) => {
        const pageNumber = req.query.pageNumber
        console.log(pageNumber);
        getAllCanteens(pageNumber, canteenDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))


    }

    const editProfileImage = (req, res) => {
        const { imageUrl, canteenId } = req.body

        editProfileUsecase(imageUrl, canteenId, canteenDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }

    const getCanteenDetails = (req, res) => {
        const { canteenId } = req.query
        getDetailsUsecase(canteenId, canteenDb).then((response) => {
           res.json(response)
        }).catch((err) => console.log(err))

    }


    return {
        viewAllCanteens,
        editProfileImage,
        getCanteenDetails
    }

}