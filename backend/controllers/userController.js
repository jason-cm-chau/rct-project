const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc Create user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req,res)=>{
    const {technician, station, password, email, admin} = req.body

    if(!technician || !station || !password || !email ||!admin){
        res.status(400)
        throw new Error('Please fill required fields')
    }

    //check user
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create
    const user = await User.create({
        technician,
        station,
        email,
        admin,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            technician: user.technician,
            station:user.station,
            email: user.email,
            admin: user.admin,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@desc Authenticate user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req,res)=>{
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            technician: user.technician,
            station:user.station,
            email: user.email,
            admin: user.admin,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }

    res.json({message: 'Login User'})
})

//@desc Get user data
//@route GET /api/users/profile
//@access Private
const getUser = asyncHandler(async (req,res)=>{
    res.status(200).json(req.user)
})

//Generate JWT
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}