const Post = require('../models/Post')
const User = require('../models/Users')

//create a post
const createPost = async (req, res) => {
    const newPost = new Post(req.body)

    try {
        const savedPost = await newPost.save()
        return res.status(201).json(savedPost)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

//update a post
const updatePost = async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body})
            res.status(200).json('post has been updated')
        } else {
            return res.status(403).send({msg: 'Not allowed'})
        }
    } catch (err) {
        res.status(500).json(err.message)
    }

}

//delete a post
const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json('post has been deleted')
        } else {
            return res.status(403).send({msg: 'Not allowed'})
        }
    } catch (err) {
        res.status(500).json(err.message)
    }
}

//like & unlike a post
const likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}})
            res.status(200).json('liked')
        } else {
            await post.updateOne({$pull: {likes: req.body.userId}})
            res.status(200).json('Unliked')
        }
    } catch (err) {
        res.status(500).json(err.message)
    }
}

//get a post
const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

//get timeline post
const getTimelinePost = async (req, res) => {

    try {
        const currentUser = await User.findById(req.params.userId)
        const userPosts = await Post.find({ userId: currentUser._id })
        const friendPost = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({userId: friendId})
            })
            
        )
        res.status(200).json(userPosts.concat(friendPost))
    } catch (err) {
        res.status(500).json(err.message)
    }
}

//get user's post
const getUserPost = async (req, res) => {

    try {
        const user = await Post.find({username: req.params.username})
        const post = await Post.find({userId: user._id})

        res.status(200).json(post)
    } catch (err) {getUserPost
        res.status(500).json(err.message)
    }
}


module.exports = { createPost, updatePost, deletePost, likePost, getPost, getTimelinePost, getUserPost }
