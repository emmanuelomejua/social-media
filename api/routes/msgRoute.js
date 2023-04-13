const { Router } = require('express')
const { addMessage, getMessage } = require('../controllers/message')
const router = Router()

router.post('/', addMessage)
router.get('/:chatId', getMessage)

module.exports = router