const asyncHandler = require('express-async-handler')

const Parts = require('../models/partsModel')

//@desc Get Computers
//@route GET /api/computers
//@access Private
const getParts = asyncHandler(async (req,res)=>{
    const parts = await Parts.find()

    res.status(200).json(parts)
})
//@desc Add Computers
//@route POST /api/computers
//@access Private
const addParts = asyncHandler(async (req,res)=>{
    const { item_number, type, make, model} = res.body
    if(!item_number || !type || !make ||!model){
        res.status(400)
        throw new Error('Field required')
    }

    const parts = await Parts.create({
        item_number: item_number,
        type: type,
        make: make,
        model: model,
        user: req.user.id
    })

    res.status(200).json(parts)
})
//@desc Update Computer
//@route PUT /api/computer/:id
//@access Private
const updateParts = asyncHandler(async (req,res)=>{
    const parts = await Parts.findById(req.params.id)

    if(!parts){
        res.status(400)
        throw new Error('Computer not found')
    }

    const updateParts = await Parts.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updateParts)
})
//@desc Delete Computers
//@route DELETE /api/computer/:id
//@access Private
const deleteParts = asyncHandler(async (req,res)=>{
    const parts = await Parts.findById(req.params.id)

    if(!parts){
        res.status(400)
        throw new Error('parts not found')
    }

    await parts.remove()//need to debug this

    res.status(200).json({id: `${req.params.id}`})
})

module.exports = {
    getParts,
    addParts,
    updateParts,
    deleteParts
}