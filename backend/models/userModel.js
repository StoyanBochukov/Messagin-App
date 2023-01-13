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
    image: {
        type: String,
        required: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)