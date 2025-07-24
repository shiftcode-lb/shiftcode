const mongoose = require('mongoose');
const validator = require('validator')

const teamSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength:30
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: props => `${props.value} is not a valid email!`
        }
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
}, { timestamps: true })

module.exports = mongoose.model('teamMember', teamSchema);