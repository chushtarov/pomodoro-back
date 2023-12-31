const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  text: String,
  count: {
    type: Number,
    default: 1,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
 }

});

const Todos = mongoose.model("Todos", todosSchema);
module.exports = Todos;
