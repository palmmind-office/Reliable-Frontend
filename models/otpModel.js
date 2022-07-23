const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
    otp: {
        type: String,
        required: true
    },
    expTime: {
        type: Date,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    verifiedSecond: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})


const OTP = mongoose.model('OTP', otpSchema);
module.exports = OTP;