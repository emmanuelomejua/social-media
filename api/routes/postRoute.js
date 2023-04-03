const express = require('express')
const { createPost, updatePost,  deletePost, likePost, getPost, getTimelinePost } = require('../controllers/post')

const { Router } = express
const router = Router()

router.post('/create', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id', getPost)
router.get('/timeline/all', getTimelinePost)

module.exports = router