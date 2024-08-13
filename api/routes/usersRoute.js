const {Router} = require('express')
const router = Router()

const { updateUser, deleteUser, getUser, followUser, unFollow, getFriends } = require('../controllers/users')

router.put('/:id', updateUser);
router.delete('/:id', deleteUser)
router.get('/',  getUser)
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unFollow);
router.get('/friends/:userId', getFriends);


module.exports = router
