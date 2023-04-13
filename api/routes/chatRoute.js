const { Router } = require('express')
const { newChat, getUserChat } = require('../controllers/chat')
const router = Router()

router.post('/', newChat)
router.get('/:userId', getUserChat)


module.exports = router
