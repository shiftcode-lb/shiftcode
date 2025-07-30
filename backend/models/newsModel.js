const mongoose = require('mongoose');
const validator = require('validator')

const newsSchema = mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    image:{
        type: String,
        trim: true,
        validate:{
            validator: validator.isURL,
            message: props => `${props.value} is not a valid url!`
        }
    },
    description:{
        type: String,
        trim: true,
        required: true,
        maxlength: 1000
    }
}, { timestamps: true })

module.exports = mongoose.model("news", newsSchema)