import userAddBookingAddressUsecase from '../../applications/usecases/user/userData/userBookingAddressAdd.js'
import userInfoUsecase from '../../applications/usecases/user/userData/userInfo.js'
import addToUserWallentUsecase from '../../applications/usecases/user/userData/addToWallet.js'
import updateUserImageUsecase from '../../applications/usecases/user/userData/updateProfileImage.js'

export default function userController(
    userRepoImplements,
    userRepoInterface
) {

    const userDb = userRepoInterface(userRepoImplements())

    const addUserBookingAddress = (req, res) => {

        userAddBookingAddressUsecase(req.body, userDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }

    const getUserData = (req, res) => {

        userInfoUsecase(req?.query?.userId, userDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }

    const addToUserWallet = (req, res) => {
        addToUserWallentUsecase(req?.body, userDb).then((response) => {
            res.json(response)
        })
    }

    const updateProfileImage = (req, res) => {
        const { imageUrl, userId } = req?.body;
        updateUserImageUsecase(imageUrl, userId, userDb).then((response) => {
            res.json(response)
        }).catch((err) => {
            console.log(err);
        })

    }
    return {
        addUserBookingAddress,
        getUserData,
        addToUserWallet,
        updateProfileImage
    }
}