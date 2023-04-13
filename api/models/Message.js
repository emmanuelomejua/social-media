const mongoose = require('mongoose')
const { model, Schema } = mongoose

const MessageSchema = new Schema({
    chatId: {
        type: String
    },
    sender: {
        type: String
    },
    text: {
        type: String
    }
}, {timestamps: true})

const Message = model('Message', MessageSchema)
module.exports = Message
