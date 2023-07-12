import mongoose from 'mongoose';
const canteenSchema = new mongoose.Schema({
    canteenName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phonenumber: {
        type: Number,
        required: true,

    },
    city: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    }
})

const Canteens = mongoose.model('Canteens', canteenSchema);
export default Canteens;
// const model = mongoose.model('Canteens', canteenSchema);
// export default model;