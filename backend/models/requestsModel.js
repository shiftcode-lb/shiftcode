const mongoose = require('mongoose');
const validator = require('validator')

const requestSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 30
    },
    email:{
        type: String,
        trim: true,
        required: true,
        maxlength:30,
        validate: {
            validator: validator.isEmail,
            message: props => `${props.value} is not a valid email!`
        }
    },
    body:{
        type: String,
        trim: true,
        required: true,
        maxlength: 1000
    }
}, { timestamps: true })

module.exports = mongoose.model("request", requestSchema)