import mongoose from 'mongoose';
import userSchema from './userSchema.js'
import packageSchema from './packageSchema.js'
import canteenSchema from './canteenSchema.js'

const wishSchema = new mongoose.Schema({

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
    }

})

const model = mongoose.model('UsersWish', wishSchema);
export default model;