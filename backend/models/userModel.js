const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    technician:{
        type: String,
        required: [true, 'Add user'],
        unique: true
    },
    station:{
        type: String,
        required: [true, 'Add user'],
        unique: true
    },
    email:{
        type: String,
        required: [true, 'Add user'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Add passwords'],
    }
},
{timestamps: true}
)

module.exports = mongoose.model('User',userSchema)