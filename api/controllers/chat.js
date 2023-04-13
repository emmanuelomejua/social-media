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

//get cuser chat
const getUserChat = async (req, res) => {
    try {
        const chat = await Chat.find({
            members: { $in: [req.URLSearchParams.userId] }
        });
        res.status(200).json(chat)
    } catch (err) {
        res.status(500).json(err)
    }
 
}


module.exports = { newChat, getUserChat }
