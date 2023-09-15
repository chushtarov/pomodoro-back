const Todos = require("../models/Todos.model");

module.exports.todosController = {
  postTodos: async (req, res) => {
    const { category, text, completed, count } = req.body;
    try {
      let todo;
      if (req.user) {
        todo = await Todos.create({ category, text, user: req.user.id });
      } else {
        todo = await Todos.create({ category, text, user: null });
      }
  
      const data = await Todos.find({ user: req.user.id }).populate('category'); // Здесь мы фильтруем тудушки по user.id
      res.json(data);

    } catch (error) {
      res.json(error.message);
    }
  },
  getTodos: async (req, res) => {
    try {
      
      if (req.user) {
        // Если пользователь авторизован, получаем его тудушки
        
        let todos = await Todos.find({ user: req.user.id });
        
        return res.json(todos);
      } else {
        // Если пользователь не авторизован, получаем дефолтные тудушки
        let todos = await Todos.find({ user: null });
        return res.json(todos);
      }
      
  
    } catch (error) {
      res.json( error.message);
    }
  },

  deleteTodos: async (req, res) => {
    try {
      const todo = await Todos.findByIdAndRemove(req.params.id);
      res.json(todo);
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
      },{new: true});
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
  patchTodosCount: async (req, res) => {
    const { count } = req.body;
    try {
      const todo = await Todos.findByIdAndUpdate(req.params.id, { count }, { new: true });
      // Важно использовать опцию { new: true }, чтобы получить обновленный документ
      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
