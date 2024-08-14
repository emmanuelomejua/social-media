const { Router } = require('express')
const { newChat, getUserChat, getChat } = require('../controllers/chat')
const router = Router()

router.post('/', newChat)
router.get('/:userId', getUserChat);
router.get('/find/:firstId/:secondId', getChat);


module.exports = router
