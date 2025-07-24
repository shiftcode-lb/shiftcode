const mongoose = require('mongoose');
const validator = require('validator')

const serviceSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength:30,
        enum: ["informative", "e-commerce", "dashboards", "portfolio", "penetration testing"]
    },
    description:{
        type: String,
        trim: true,
        required: true,
        maxlength:500
    },
    image:{
        type: String,
        trim: true,
        required: true,
        validate:{
            validator: validator.isURL,
            message: props => `${props.value} is not a valid url!`
        }
    },
}, { timestamps: true })

module.exports = mongoose.model("service", serviceSchema)