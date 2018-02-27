const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
            type: String,
            required: true,
            min: 3
        },
    surname: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        unique: true,
        type: String,
        required: true,
        min: 6
    },
    password: {
        type: String,
        required: true,
        min: 4
    },
    role: {
        type: String,
        default: 'user'
    },
    date_crated: Date
});

exports.User = mongoose.model('User', User);