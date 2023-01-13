const mongoose = require('mongoose')

// const likeSchema = mongoose.Schema({
//     likes: {
//         type: Number,
//         required: true
//     },
//     user:{
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'User'
//     }
// })

const ticketSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    // like:[likeSchema],
    numLikes: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Ticket', ticketSchema)