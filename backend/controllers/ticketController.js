const asyncHandler = require('express-async-handler')
const Ticket = require('../models/ticketModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//Create new ticket
//POST/api/tickets
//Private/Protected
const createTicket = asyncHandler( async(req, res) => {
    const { message } = req.body
    if(!message){
        res.status(400)
        throw new Error('Please add a message')
    }
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    const ticket = await Ticket.create({
        message,
        user: req.user.id
    })
    res.status(201).json(ticket)
})

const getTickets = asyncHandler( async(req, res) => {
    const tickets = await Ticket.find({})
    res.json(tickets)
})



module.exports = {
    createTicket,
    getTickets
}