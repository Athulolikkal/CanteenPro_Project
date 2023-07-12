import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Phonenumber: {
        type: String,
        required: true
    },
    Building: {
        type: String,
        required: true
    },
    Street: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    District: {
        type: String,
        required: true
    },
    Pincode: {
        type: String,
        required: true
    },
});

const userSchema = new mongoose.Schema({

    name: {
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

    },
    password: {
        type: String,

    },
    image: {
        type: String,
    },
    bookingAddress: {
        type: addressSchema
    },
    status: {
        type: Boolean,
        default: true
    },
    wallet:{
        type:Number,
        default:0
    }
})

const model = mongoose.model('User', userSchema);
export default model;