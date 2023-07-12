import mongoose from 'mongoose';
import wishSchema from '../model/wishSchema.js'
const ObjectId = mongoose.Types.ObjectId;
export default function wishDbrepositories() {

    const addWish = (wish) => {

        try {
            const wishAdded = new wishSchema({
                userId: wish?.getUserId(),
                packageId: wish?.getPackageId(),
                canteenId: wish?.getCanteenId(),
                source: wish?.getSource(),
                total: wish?.getTotal(),
                startDate: wish?.getStartDate(),
                endDate: wish?.getEndDate(),
                image: wish?.getImage(),
                totalPerDayRate: wish?.getTotalPerDayRate(),
                breakfast: wish?.getBreakfast(),
                lunch: wish?.getLunch(),
                dinner: wish?.getDinner(),
            })
            return wishAdded.save()
        } catch (err) {
            console.log(err);
        }
    }


    const isSamePackage = async (id, userId) => {
        try {


            const isExist = await wishSchema.find({
                packageId: new ObjectId(id),
                userId: new ObjectId(userId),
                status: true
            })
            return isExist
        } catch (err) {
            console.log(err);
        }

    }

    const activeWishes = async (userId, currentDate) => {
        try {
            const userActiveWishes = await wishSchema.find({
                userId: new ObjectId(userId),
                status: true,
                $expr: {
                    $lte: [
                        currentDate,
                        '$endDate'
                    ]
                }
            });

            return userActiveWishes;
        } catch (err) {
            console.log(err);
        }
    }

    const noLongerWishes = async (userId, currentDate) => {
        try {
            const changeStatus = await wishSchema.updateMany({
                userId: new ObjectId(userId),
                $expr: {
                    $gt: [
                        currentDate,
                        '$endDate'
                    ]
                }
            },
                {
                    $set: {
                        status: false
                    }
                });

            return changeStatus;

        } catch (err) {
            console.log(err);
        }
    };

    const removeItembyId = async (id) => {
        try {
            const removeWish = await wishSchema.findByIdAndDelete(id)
            return removeWish
        } catch (err) {
            console.log(err);
        }
    }
    const getWishById = async (id) => {
        try {
            const findUserWish = await wishSchema.findById(id)
            return findUserWish
        } catch (err) {
            console.log(err);
        }
    }

    const getPackageDetailsById = async (wishId) => {
        try {
            const getPackageDetails = await wishSchema.findById(wishId).populate('packageId')
            return getPackageDetails
        } catch (err) {
            console.log(err);
        }
    }

    return {
        addWish,
        isSamePackage,
        activeWishes,
        noLongerWishes,
        removeItembyId,
        getWishById,
        getPackageDetailsById
    }
}