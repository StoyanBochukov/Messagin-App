const express = require('express')
const router = express.Router()
const { createTicket, getTickets, likeTicket } = require('../controllers/ticketController')
const protect = require('../middleware/authMiddleware')

router.route('/').get(getTickets).post(protect, createTicket)
router.route('/:id').post(likeTicket)

module.exports = router