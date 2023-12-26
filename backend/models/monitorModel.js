const mongoose = require('mongoose')

const monitorSchema = mongoose.Schema({
    item_number:{
        type: String,
        required: [true, "Add a value"]
    },
    rct_number:{
        type: String,
    },
    serial_number:{
        type: String,
    },
    type:{
        type: String,
        required: [true, "Add a value"]
    },
    make:{
        type: String,
        required: [true, "Add a value"]
    },
    model:{
        type: String,
        required: [true, "Add a value"]
    },
    bin:{
        type: String,
    },
    technician:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    workstation:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    received:{
        type: String,
    },
    lot_number:{
        type: String,
    },
    reciept_number:{
        type: String,
    },
    status:{
        type: String,
    }
},
{timestamps: true}
)

module.exports = mongoose.model('Monitor',monitorSchema)