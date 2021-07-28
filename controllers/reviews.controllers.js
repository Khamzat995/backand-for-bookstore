const Review = require("../models/Review.model");

module.exports.reviewController = {
  createReview: async (req, res) => {
    const { author, bookId, text } = req.body;

    if (!author) {
      return res.status(400).json({
        error: "Необходимо указать имя автора",
      });
    }
    if (!bookId) {
      return res.status(400).json({
        error: "Необходимо указать ID книги",
      });
    }

    if (!text) {
      return res.status(400).json({
        error: "Необходимо указать текст рецензии",
      });
    }

    try {
      const review = await new Review({
        author,
        text,
        bookId,
      });

      await review.save();

      return res.json(review);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  removeReview: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await Review.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: "Не удалось удалить рецензию. Укажите верный ID",
        });
      }

      return res.json({
        message: "Рецензия успешно удалена",
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getReviewByBookId: async (req, res) => {
    const { id } = req.params;

    try {
      const review = await Review.find({ bookId: id });

      return res.json(review);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getAllReview: async (req, res) => {
    try {
      const review = await Review.find();

      return res.json(review);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
