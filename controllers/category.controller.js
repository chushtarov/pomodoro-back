const Category = require("../models/Category.model");

module.exports.categoryController = {
    postCategory: async (req, res) => {
    const { category } = req.body;
    try {
      const data = await Category.create({ category });
      res.json(data);
    } catch (error) {
      res.json(error.message);
    }
  }}