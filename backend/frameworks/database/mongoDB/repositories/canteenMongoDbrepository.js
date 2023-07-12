import canteenSchema from '../model/canteenSchema.js'

export default function canteenImplementsMongoDb() {

    const countOfCanteens = () => {
        return canteenSchema.find().count()
    }


    const allCanteens = (skipNumber, limit) => {
        try {

            return canteenSchema.find().skip(skipNumber).limit(limit)

        } catch (err) {
            console.log(err)
        }
    }

    const editUserProfile = async (url, id) => {
        try {
            const isEdit = await canteenSchema.findByIdAndUpdate(id, { image: url });
            return isEdit
        } catch (err) {
            console.log(err);
        }
    }

    const findCanteenById = async (id) => {
        try {
            const canteen = await canteenSchema.findById(id)
            return canteen
        } catch (err) {
            console.log(err);
        }
    }

    return {
        countOfCanteens,
        allCanteens,
        editUserProfile,
        findCanteenById


    }
}