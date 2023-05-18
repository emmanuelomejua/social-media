const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required:[ true, 'This is a required field'],
        min: 4,
        max: 25,
    },
    email: {
        type: String,
        required: [ true, 'This is a required field'],
        min: 4,
        max: 25,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: [4, 'Password must be at least 4 characters'],
        max: 25,
    },
    profilePic: {
        type: String,
        default: ''
    },
    coverPic: {
        type: String,
        default: ''
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
        max: 200
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 200
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }
}, {timestamps: true})

const Users = model('Users', userSchema);

module.exports = Users
