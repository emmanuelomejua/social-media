const mongoose = require('mongoose');

const {Schema, model} = mongoose

const postSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    }
}, {timestamps: true})

const Posts = model('Posts', postSchema)

module.exports = Posts