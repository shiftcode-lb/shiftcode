const mongoose = require('mongoose');
const validator = require('validator')

const jobSchema = mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
        maxlength: 30
    },
    description:{
        type: String,
        trim: true,
        required: true,
        maxlength: 1000
    },
    endDate: {
    type: Date,
    required: true,
    validate: {
        validator: function (value) {
            return value instanceof Date && !isNaN(value);
        },
        message: props => `${props.value} is not a valid date!`
    }
}

}, { timestamps: true })

module.exports = mongoose.model("job", jobSchema)