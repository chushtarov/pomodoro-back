const {todosController} = require('../controllers/todos.controller')
const {Router} = require('express')
const authorization = require('../middleware/auth.middleware')

const router = Router()

router.get('/todos', todosController.getTodos)
router.post('/todos', todosController.postTodos)
router.delete('/todosDelete/:id', todosController.deleteTodos)
router.patch('/todosPatchText/:id', todosController.patchTodosText)
router.patch('/todosPatchCom/:id', todosController.patchTodosComp)
router.patch('/todosPatchCat/:id', todosController.patchTodosCat)

module.exports = router;