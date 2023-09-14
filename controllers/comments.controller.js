const Comment = require("../models/Comment.model");
const User = require("../models/User.model");

module.exports = {
  addComment: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      console.log(user);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const comment = await Comment.create({
        text: req.body.text,
        author: user._id,
        username: user.login,
      });

      res.json({ success: true, message: "Комментарий успешно добавлен" });
    } catch (error) {
      console.error("Error adding comment:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const commentId = req.params.commentId;
      const comment = await Comment.findById(commentId);

      if (!comment) {
        return res.status(404).json("Комментарий не найден");
      }

      if (comment.author.toString() === req.user.id) {
        await Comment.deleteOne({ _id: commentId });
        return res.json("Комментарий удален");
      }

      return res.status(401).json("Ошибка. Нет доступа");
    } catch (e) {
      return res.status(400).json("Ошибка: " + e.toString());
    }
  },
  getComments: async (req, res) => {
    try {
      const comments = await Comment.find();

      res.json(comments);
    } catch (error) {
      console.error("Error getting comments:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
};
