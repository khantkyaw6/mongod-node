const AuthorModel = require("../model/author_schema");

const create = async (req, res) => {
  const { name } = req.body;

  const newAuthor = new AuthorModel({ name });
  const saveAuthor = await newAuthor.save();

  res.status(200).json({
    error: false,
    message: "author create successfully",
    data: saveAuthor,
  });
};

module.exports = { create };
