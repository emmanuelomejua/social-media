'use strict';

const Chat = require('../models/Chat');

//user chat
const newChat = async (req, res) => {
    const chat = new Chat({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        const savedChat = await chat.save()
        res.status(200).json(savedChat)
    } catch (err) {
        res.status(500).json(err)
    }
}

//get user chat
const getUserChat = async (req, res) => {
    try {
        const chat = await Chat.find({
            members: { $in: [req.params.userId] }
        });
        res.status(200).json(chat)
    } catch (err) {
        res.status(500).json(err)
    }
 
}


//get chat for only two users
const getChat = async (req, res) => {
    try {
        const chat = await Chat.findOne({
            members: { $all: [req.params.firstId, req.params.secondId] }
        });
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error.message);
    }
}



module.exports = { newChat, getUserChat, getChat  }
