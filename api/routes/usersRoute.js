const {Router} = require('express')
const router = Router()

const { updateUser, deleteUser, getUser, followUser, unFollow } = require('../controllers/users')

router.put('/:id', updateUser);
router.delete('/:id', deleteUser)
router.get('/',  getUser)
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unFollow);


module.exports = router
