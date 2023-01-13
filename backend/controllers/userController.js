const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


//Generate Token
const generateToken = (id, firstName) => {
    return jwt.sign({ id, firstName }, process.env.JWT_SECRET, {
        expiresIn: '24h'
    })
}

//Register a new User
//route /api/users
//access public
const registerUser = asyncHandler( async(req, res) => {
    const { firstName, lastName, email, password, image } = req.body

    //Validation
    if(!firstName || !lastName || !email || !password){
        res.status(400)
        throw new Error('Please include all fields')
    }
    //If user already exist
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error('User already exists')
    }
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        image: '/images/sample.jpg'
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id, user.firstName)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//Login user
//route /api/users/login
//access private

const loginUser = asyncHandler( async(req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({email})

    //Check user and password
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id, user.firstName)
        })
    }else{
        res.status(401)
        throw new Error('Invalid credentials')
    }
})

//@desc Get current user
//@route /api/users/me
//@access private/protecter route
const getMe = asyncHandler(async (req, res) => {
    const user = {
        id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
    }
    res.status(200).json(user)
})


module.exports = {
    registerUser,
    loginUser,
    getMe
}