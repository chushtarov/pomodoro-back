const {todosController} = require('../controllers/todos.controller')
const {Router} = require('express')
const authorization = require('../middleware/auth.middleware')

const router = Router()

router.get('/todos', authorization, todosController.getTodos)
router.post('/todos',  authorization, todosController.postTodos)
router.delete('/todosDelete/:id', todosController.deleteTodos)
router.patch('/todosPatchText/:id', todosController.patchTodosText)
router.patch('/todosPatchCom/:id', todosController.patchTodosComp)
router.patch('/todosPatchCat/:id', todosController.patchTodosCat)
router.patch('/todosPatchCount/:id', todosController.patchTodosCount)

module.exports = router;