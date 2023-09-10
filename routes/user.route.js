const {userController} = require('../controllers/user.controller')
const {Router} = require('express')
const authorization = require('../middleware/auth.middleware')

const router = Router()

router.get('/users', userController.getAllUser)
router.post('/users', userController.registerUser)
router.post('/login', userController.login)

module.exports = router;