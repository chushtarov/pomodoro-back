const express = require("express");

const commentsController = require("../controllers/comments.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/comments", authMiddleware, commentsController.addComment);

router.delete(
  "/deleteComment/:commentId",
  authMiddleware,
  commentsController.deleteComment
);

router.get("/comments", commentsController.getComments);

module.exports = router;
