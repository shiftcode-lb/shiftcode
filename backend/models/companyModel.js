const mongoose = require('mongoose');
const validator = require('validator');
const { validate } = require('./teamModel');

const companySchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: validator.isEmail,
            message: props => `${props.value} is not a valid email!`
        }
    },
    socialLinks: {
        instagram: {
        type: String,
        trim: true,
        validate: {
            validator: (value) =>
            value === '' || validator.isURL(value), // allow empty or valid URL
            message: 'Invalid Instagram URL',
        },
        },
        linkedin: {
        type: String,
        trim: true,
        validate: {
            validator: (value) =>
            value === '' || validator.isURL(value),
            message: 'Invalid LinkedIn URL',
        },
        },
        github: {
        type: String,
        trim: true,
        validate: {
            validator: (value) =>
            value === '' || validator.isURL(value),
            message: 'Invalid GitHub URL',
        },
        },
        facebook: {
        type: String,
        trim: true,
        validate: {
            validator: (value) =>
            value === '' || validator.isURL(value),
            message: 'Invalid Facebook URL',
        },
        },
    },
    logo:{
        type: String,
        trim: true,
        required: true,
        validate:{
            validator: validator.isURL,
            message: props => `${props.value} is not a valid url!`
        }
    },
    number: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: value => validator.isMobilePhone(value, 'any'),
            message: props => `${props.value} is not a valid mobile phone number!`
        }
    },
    partner:{
        type: [String],
    },
    events:{
        type: [String]
    },
    workingDays:{
        type: [String],
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("company", companySchema)