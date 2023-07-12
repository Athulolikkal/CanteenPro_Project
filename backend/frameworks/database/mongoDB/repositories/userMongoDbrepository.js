import userSchema from '../model/userSchema.js'

export default function userImplementsMongoDb() {

    const addBookingAddress = async (details, userId) => {
        try {
            const addAddress = await userSchema.findByIdAndUpdate(userId, { bookingAddress: details },
                { new: true });
            return addAddress
        }
        catch (err) {
            console.log(err);
        }
    }

    const getUserData = async (userId) => {
        try {
            const data = await userSchema.findById(userId)
            return data
        } catch (err) {
            console.log(err)
        }
    }

    const addToWallet = async (userId, currentWallentAmount) => {
        try {
            const toWallet = await userSchema.findByIdAndUpdate(userId, { wallet: currentWallentAmount })
            return toWallet
        } catch (err) {
            console.log(err);
        }
    }
    const updateImage = async (userId, imageUrl) => {
        try {
         const updateUserProfile= await userSchema.findByIdAndUpdate(userId,{image:imageUrl})
         return updateUserProfile
        } catch (err) {
            console.log(err);
        }
    }
    return {
        addBookingAddress,
        getUserData,
        addToWallet,
        updateImage
    }


}

