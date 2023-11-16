const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc Create user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req,res)=>{
    const {technician, station, password, email} = req.body

    if(!technician || !station || !password || !email){
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
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            technician: user.technician,
            station:user.station,
            email: user.email,
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
    const {_id, technician, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        technician,
        email,
        token: generateToken(user._id)
    })
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