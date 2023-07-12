import mongoose from 'mongoose';
import userSchema from './userSchema.js'
import packageSchema from './packageSchema.js'
import canteenSchema from './canteenSchema.js'


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
    }
});

const bookingSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'packages',
    },
    canteenId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Canteens',
    },
    source: {
        type: String,
        required: true,
    },
    bookingAmount: {
        type: Number,
        required: true,
    },
    totalDays: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,

    },
    totalPerDayRate: {
        type: Number,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    status: {
        type: Boolean,
        default: true
    },
    booked: {
        type: Boolean,
        default: false
    },
    cancelled: {
        type: Boolean,
        default: false
    },
    breakfast: {
        mainCourse: {
            type: [String],
        },
        sideCourse: {
            type: [String]
        },
        specials: {
            type: [String]
        }, availableTime: {
            type: String,
        }, ratePerDay: {
            type: Number,
        }, ratePerMonth: {
            type: Number
        }, category: {
            type: String
        },
        image: {
            type: String
        },
        canteenName: {
            type: String
        },
        packageId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'packages',
        },
        city: {
            type: String
        }
    },
    lunch: {
        mainCourse: {
            type: [String],
        },
        sideCourse: {
            type: [String]
        },
        specials: {
            type: [String]
        }, availableTime: {
            type: String,
        }, ratePerDay: {
            type: Number,
        }, ratePerMonth: {
            type: Number
        }, category: {
            type: String
        },
        image: {
            type: String
        },
        canteenName: {
            type: String
        },
        packageId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'packages',
        },
        city: {
            type: String
        }
    },
    dinner: {
        mainCourse: {
            type: [String],
        },
        sideCourse: {
            type: [String]
        },
        specials: {
            type: [String]
        }, availableTime: {
            type: String,
        }, ratePerDay: {
            type: Number,
        }, ratePerMonth: {
            type: Number
        }, category: {
            type: String
        },
        image: {
            type: String
        },
        canteenName: {
            type: String
        },
        packageId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'packages',
        },
        city: {
            type: String
        }
    },
    image: {
        type: String
    },
    bookingAddress: {
        type: addressSchema

    },
    category: {
        type: String
    },

})

const model = mongoose.model('UserBooking', bookingSchema);
export default model;
