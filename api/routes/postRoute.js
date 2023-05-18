const express = require('express')
const { createPost, updatePost,  deletePost, likePost, getPost, getTimelinePost, getUserPost } = require('../controllers/post')

const { Router } = express
const router = Router()

router.post('/create', createPost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)

router.put('/:id/like', likePost)

router.get('/:id', getPost)

router.get('/timeline/:userId', getTimelinePost)

router.get('/profile/:username', getUserPost)

module.exports = router
