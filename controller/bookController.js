const BookModel = require("../model/book_schema");

const createBook = async (req, res) => {
  const { title, releaseYear, authorId } = req.body;

  const newBook = new BookModel({
    title,
    releaseYear,
    authorId,
  });

  const saveBook = await newBook.save();

  res.status(200).json({
    error: false,
    message: "book create successfully",
    data: saveBook,
  });
};

module.exports = { createBook };
