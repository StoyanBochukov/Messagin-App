const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: [true, 'Please add first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please add last name']
    },
    email: {
        type: String,
        required:[true, 'Please add a email'],
        unique: true
    },
    password: {
        type: String,
        required:[true, 'Please add a pasword']
    },
    position:{
        type: String,
        required: false,
        default: 'HackSoft'
    },
    image: {
        type: String,
        required: false,
        default: '/images/sample.jpg'
    }
},{
    timestamps: true
})



module.exports = mongoose.model('User', userSchema)