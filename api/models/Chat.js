const mongoose = require('mongoose')
const { model, Schema } = mongoose

const ChatSchema = new Schema({
    members: {
        type: Array
    }
}, {timestamps: true})

const Chat = model('Chat', ChatSchema)
module.exports = Chat
