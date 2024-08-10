const User = require('../models/Users');
const bcrypt = require('bcrypt');


//update
const updateUser = async (req, res) => {
    if(!(req.body.userId === req.params.id || req.body.isAdmin)){
        return res.status(403).json('You are not authorized to perform this action')
    }

    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        res.status(200).json({msg: 'Password updated successfully!'});
        return;
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json({data: user, msg: 'Account updated successfully'})
    } catch (err) {
        res.status(500).json(err.message)
    }
 
}

    

//delete
const deleteUser = async (req, res) => {
    if(!(req.body.userId === req.params.id || req.body.isAdmin)){
        return res.status(403).json('You are not authorized to perform this action')
    }
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json('Account deleted successfully')
    } catch (err) {
        res.status(500).json(err.message)
    }
} 


//get a user
const getUser = async (req, res) => {
    const userId = req.params.userId;
    const username = req.query.username;

    try {
        const user = userId ? await User.findById(userId): 
        await User.findOne({username: username});

        if(!user) return res.status(404).json({msg: 'User not found or does not exist'});

        const { password, ...data } = user._doc;

        res.status(200).json({data});
    } catch (err) {
        res.status(500).json(err.message)
    }
}

//follow a user
const followUser = async (req, res) => {
    if(req.body.userId === req.params.id){
        return res.status(400).json({message: 'Invalid request!'})
    } 

    try {
        const currentUser = await User.findById(req.body.userId)
        const user = await User.findById(req.params.id)

        if(!user.followers.includes(req.body.userId)){
            await user.updateOne({$push: {followers: req.body.userId}})
            await currentUser.updateOne({$push: {followings: req.params.id}})
            res.status(200).json('Now following')
        } else {
            return res.status(403).json("Already following this user")
        }
    } catch (err) {
        res.status(403).json(err.message)
    }
    
}

//unfollow user
const unFollow = async (req, res) => {
    if(req.body.userId !== req.params.id){
        return res.status(400).json({message: 'Invalid request!'})
    } 
    try {
        const currentUser = await User.findById(req.body.userId)
        const user = await User.findById(req.params.id)

        if(user.followers.includes(req.body.userId)){
            await user.updateOne({$pull: {followers: req.body.userId}})
            await currentUser.updateOne({$pull: {followings: req.params.id}})
            res.status(200).json('You have unfollowing this user')
        } else {
            return res.status(403).json("Not following this user")
        }
    } catch (err) {
        res.status(403).json(err.message)
    }

}


module.exports = { updateUser, deleteUser, getUser, followUser, unFollow }
