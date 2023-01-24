const asyncHandler = require('express-async-handler')
const Ticket = require('../models/ticketModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { json } = require('express')

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
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        user: req.user.id,
        image: req.user.image,
        position: req.user.position
    })
    res.status(201).json(ticket)
})

const getTickets = asyncHandler( async(req, res) => {
    const tickets = await Ticket.find({})
    res.json(tickets)
})

const likeTicket = asyncHandler( async(req, res) => {
    const ticket = await Ticket.findById(req.params.id)

    if(ticket){
        ticket.numLikes++
        const updatedTicket = await ticket.save()
        res.json(updatedTicket)

    }else{
        res.status(404)
        throw new Error('Ticket not found')
    }
})



module.exports = {
    createTicket,
    getTickets,
    likeTicket
}