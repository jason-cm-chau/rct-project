const asyncHandler = require('express-async-handler')

const Monitor = require('../models/monitorModel')

//@desc Get Monitor
//@route GET /api/monitor
//@access Private
const getMonitor = asyncHandler(async (req,res)=>{
    const monitors = await Monitor.find()

    res.status(200).json(monitors)
})
//@desc Add Monitor
//@route POST /api/monitor
//@access Private
const addMonitor = asyncHandler(async (req,res)=>{
    const { item_number, type, make, model} = res.body
    if(!item_number || !type || !make ||!model){
        res.status(400)
        throw new Error('Field required')
    }

    const monitor = await Monitor.create({
        item_number: item_number,
        type: type,
        make: make,
        model: model,
        user: req.user.id
    })

    res.status(200).json(monitor)
})
//@desc Update Monitor
//@route PUT /api/monitor/:id
//@access Private
const updateMonitor = asyncHandler(async (req,res)=>{
    const monitor = await Monitor.findById(req.params.id)

    if(!monitor){
        res.status(400)
        throw new Error('Monitor not found')
    }

    const updateMonitor = await Monitor.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updateMonitor)
})
//@desc Delete Monitor
//@route DELETE /api/monitor/:id
//@access Private
const deleteMonitor = asyncHandler(async (req,res)=>{
    const monitor = await Monitor.findById(req.params.id)

    if(!monitor){
        res.status(400)
        throw new Error('monitor not found')
    }

    await monitor.remove()//need to debug this

    res.status(200).json({id: `${req.params.id}`})
})

module.exports = {
    getMonitor,
    addMonitor,
    updateMonitor,
    deleteMonitor
}