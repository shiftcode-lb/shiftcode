const mongoose = require('mongoose');
const validator = require('validator')

const projectSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength:30
    },
    description:{
        type: String,
        trim: true,
        required: true,
        maxlength:500
    },
    image:{
        type: [String],
        required: true,
        validate: {
            validator: function (arr) {
                return arr.every(url => validator.isURL(url));
            },
            message: props => `One or more image URLs are invalid!`
        }
    },
    category:{
        type: String,
        trim: true,
        enum: ["informative", "e-commerce", "dashboards", "portfolio"]
    }
}, { timestamps: true })

module.exports = mongoose.model("project", projectSchema)