import userSchema from '../model/userSchema.js'
import canteenSchema from '../model/canteenSchema.js'

export default function authDbrepositories() {

    const findByEmail = (email) => {
        return userSchema.find({ email })
    }

    const addUser = (user) => {
        const newUser = new userSchema({
            name: user?.getUserName(),
            email: user?.getEmail(),
            phonenumber: user?.getPhonenumber(),
            password: user?.getPassword()
        })
        return newUser.save()
    }

    const addUserGoogleSingup = (user) => {
        const newUser = new userSchema({
            name: user?.getUserName(),
            email: user?.getEmail(),
            image: user?.getImage()
        })
        return newUser.save()
    }

    const findCanteenByEmail = (email) => {
        return canteenSchema.find({ email })
    }

    const addCanteen = (canteen) => {
        const newCanteen = new canteenSchema({
            canteenName: canteen?.getCanteenName(),
            email: canteen?.getEmail(),
            phonenumber: canteen?.getPhonenumber(),
            city: canteen?.getCity(),
            pinCode: canteen?.getPincode(),
            password: canteen?.getPassword()
        })
        return newCanteen.save()
    }

    return {

        findByEmail,
        addUser,
        addUserGoogleSingup,
        findCanteenByEmail,
        addCanteen
    }

}