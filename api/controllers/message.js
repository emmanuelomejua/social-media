'use strict';

const Message = require('../models/Message')


//add msg
const addMessage = async (req, res) => {
    const msg = new Message(req.body)
    try {
        const savedMsg = await msg.save()
        res.status(200).json(savedMsg)
    } catch (err) {
        res.status(500).json(err)
    }           

}

//get a msg
const getMessage = async (req, res) => {
    try {
        const msg = await Message.find({
            chatId: req.params.chatId
        })
        res.status(200).json(msg)
    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports = { addMessage, getMessage }
