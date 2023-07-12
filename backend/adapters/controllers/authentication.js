import userSignup from "../../applications/usecases/user/auth/signUp.js"
import userGoogleSignup from "../../applications/usecases/user/auth/googleSignup.js"
import login from '../../applications/usecases/user/auth/login.js'
import googleUserLogin from "../../applications/usecases/user/auth/googleUserlogin.js"
import canteenSignupUsecase from "../../applications/usecases/canteen/auth/cateenSignUp.js"
import canteenLoginUsecase from "../../applications/usecases/canteen/auth/canteenLogin.js"

export default function authentication(
    authDbrepositoriesinterface,
    authDbrepositoriesMongoDbimplements,
    authSerivecsImp,
    authServicesInter
) {
    const authdb = authDbrepositoriesinterface(authDbrepositoriesMongoDbimplements())
    const authServices = authServicesInter(authSerivecsImp())

    const registerUser = (req, res) => {
        console.log(req.body)
        const { name, email, phonenumber, password } = req.body
        userSignup(email, name, phonenumber, password, authdb, authServices).then((response) => {

            res.status(200).json(response)
        }).catch((err) => console.log(err)

        )
    }

    const googleSignup = (req, res) => {
        console.log(req.body, 'googleSignupdata')
        const { name, email, image } = req.body
        userGoogleSignup(name, email, image, authdb, authServices).then((response) => {
            res.status(200).json(response)
        }).catch((err) => console.log(err))

    }

    const loginUser = (req, res) => {
        console.log(req.body)
        const { email, password } = req.body
        login(email, password, authdb, authServices).then((response) => {
            console.log(response);
            res.status(200).json(response)
        }).catch((err) => console.log(err))
    }
    const googlelogin = (req, res) => {
        const { email, name } = req.body
        console.log(email, name, 'googlelogin email')
        googleUserLogin(email, authdb, authServices).then((response) => {
            res.status(200).json(response)
        }).catch((err) => console.log(err))

    }
    const canteenSignup = (req, res) => {

        const { CanteenName, Email, Phonenumber, City, Pincode, Password } = req.body
        console.log(CanteenName, Email, Phonenumber, City, Pincode, Password, 'destructrued data is heree');
        canteenSignupUsecase(CanteenName, Email, Phonenumber, City, Pincode, Password, authdb, authServices).then((response) => {
            console.log(response);
            res.json(response)
        }).catch((err) => console.log(err))
    }

    const canteenLogin = (req, res) => {
        const { Email, Password } = req.body
        canteenLoginUsecase(Email, Password, authdb, authServices).then((response) => {
            console.log(response);
            res.json(response)
        }).catch((err) => console.log(err))

    }

    return {

        registerUser,
        googleSignup,
        loginUser,
        googlelogin,
        canteenSignup,
        canteenLogin
    }
}