const User = require('../models/Users');
const bcrypt = require('bcrypt');


//update
const updateUser = async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (err) {
                res.status(500).json(err.message)
            }
        } else {
            try {
                const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
                res.status(200).json('Account updated')
            } catch (err) {
                res.status(500).json(err.message)
            }
        }

    } else {
        return res.status(403).json('You are not authorized to perform this action')
    }
} 

//delete
const deleteUser = async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json('Account deleted successfully')
        } catch (err) {
            res.status(500).json(err.message)
        }
    } else {
        return res.status(403).json('You are not authorized this action')
    }
}

//get a user
const getUser = async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username
    try {
        const user = userId ? 
        await User.findById(userId) :  
        await User.findOne({username})

        const {password, isAdmin, ...otherDetails} = user._doc
        res.status(200).json({...otherDetails})
    } catch (err) {
        res.status(500).json(err.message)
    }
}

//follow a user

const followUser = async (req, res) => {
    if(req.body.userId !== req.params.id){
        try {
            const currentUser = await User.findById(req.body.userId)
            const user = await User.findById(req.params.id)

            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}})
                await currentUser.updateOne({$push: {followings: req.params.id}})
                res.status(200).json('Now following')
            } else {
                return res.status(403).json("Already following")
            }
        } catch (err) {
            res.status(403).json(err.message)
        }
    } else {
        res.status(500).json('Not allowed')
    }
}

//unfollow user
const unFollow = async (req, res) => {
    if(req.body.userId !== req.params.id){
        try {
            const currentUser = await User.findById(req.body.userId)
            const user = await User.findById(req.params.id)

            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}})
                await currentUser.updateOne({$pull: {followings: req.params.id}})
                res.status(200).json('Now following this user')
            } else {
                return res.status(403).json("Now following this user")
            }
        } catch (err) {
            res.status(403).json(err.message)
        }
    } else {
        res.status(500).json('Not allowed')
    }
    
}


module.exports = { updateUser, deleteUser, getUser, followUser, unFollow }
