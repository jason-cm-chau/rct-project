const asyncHandler = require('express-async-handler')

const Computer = require('../models/computerModel')

//@desc Get Computers
//@route GET /api/computers
//@access Private
const getComputer = asyncHandler(async (req,res)=>{
    const computers = await Computer.find()

    res.status(200).json(computers)
})
//@desc Add Computers
//@route POST /api/computers
//@access Private
const addComputer = asyncHandler(async (req,res)=>{
    const { item_number, type, make, model} = res.body
    if(!item_number || !type || !make ||!model){
        res.status(400)
        throw new Error('Field required')
    }

    const computer = await Computer.create({
        item_number: item_number,
        type: type,
        make: make,
        model: model,
        //user: req.user.id
    })

    res.status(200).json(computer)
})
//@desc Update Computer
//@route PUT /api/computer/:id
//@access Private
const updateComputer = asyncHandler(async (req,res)=>{
    const computer = await Computer.findById(req.params.id)

    if(!computer){
        res.status(400)
        throw new Error('Computer not found')
    }

    const updateComputer = await Computer.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updateComputer)
})
//@desc Delete Computers
//@route DELETE /api/computer/:id
//@access Private
const deleteComputer = asyncHandler(async (req,res)=>{
    const computer = await Computer.findById(req.params.id)

    if(!computer){
        res.status(400)
        throw new Error('Computer not found')
    }

    await computer.remove()//need to debug this

    res.status(200).json({id: `${req.params.id}`})
})

module.exports = {
    getComputer,
    addComputer,
    updateComputer,
    deleteComputer
}