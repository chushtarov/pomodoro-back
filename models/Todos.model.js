const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  category: {
    type: String,
    default: "",
  },
  text: String,
  count: Number,
});

const Todos = mongoose.model("Todos", todosSchema);
module.exports = Todos;
