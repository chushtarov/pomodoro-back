const Todos = require("../models/Todos.model");

module.exports.todosController = {
  postTodos: async (req, res) => {
    const { category, text, completed, count } = req.body;
    try {
      const todo = await Todos.create({ category, text })
      const data = await Todos.find().populate('category')
      res.json(data);
    } catch (error) {
      res.json(error.message);
    }
  },
  getTodos: async (req, res) => {
    try {
      const todo = await Todos.find().populate("category");
      res.json(todo);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteTodos: async (req, res) => {
    try {
      const todo = await Todos.findByIdAndRemove(req.params.id);
      res.json("удалено");
    } catch (error) {
      res.json(error.message);
    }
  },
  patchTodosText: async (req, res) => {
    const {text} = req.body
    try {
      const todo = await Todos.findByIdAndUpdate(req.params.id, {
        text
      },{ new: true });
      res.json("изменено");
    } catch (error) {
      res.json(error.message);
    }
  },
  patchTodosComp: async (req, res) => {
    const {completed} = req.body
    try {
      const todo = await Todos.findByIdAndUpdate(req.params.id, {
        completed
      });
      res.json(todo);
    } catch (error) {
      res.json(error.message);
    }
  },
  patchTodosCat: async (req, res) => {
    const { category } = req.body;
    try {
      const todo = await Todos.findByIdAndUpdate(req.params.id, { category }, { new: true });
      // Важно использовать опцию { new: true }, чтобы получить обновленный документ
      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
