const {categoryController} = require('../controllers/category.controller')
const {Router} = require('express')
const authorization = require('../middleware/auth.middleware')

const router = Router()

router.post('/category', categoryController.postCategory)
router.get('/category', categoryController.getCategory)


module.exports = router;