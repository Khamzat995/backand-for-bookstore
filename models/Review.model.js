const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Author",
    required: true,
  },

  bookId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Author",
    required: true,
  },

  text: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
