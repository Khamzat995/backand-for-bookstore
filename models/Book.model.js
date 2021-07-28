const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Author",
    required: true,
  },

  genre: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Genres",
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
