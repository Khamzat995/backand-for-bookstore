const Book = require("../models/Book.model");

module.exports.bookController = {
  createBook: async (req, res) => {
    const { title, author, genre } = req.body;

    if (!title) {
      return res.status(400).json({
        error: "Необходимо указать заголовок книги",
      });
    }
    if (!author) {
      return res.status(400).json({
        error: "Необходимо указать автора книги",
      });
    }

    if (!genre) {
      return res.status(400).json({
        error: "Необходимо указать жанр книги",
      });
    }

    try {
      const book = await new Book({
        title,
        author,
        genre,
      });

      await book.save();

      return res.json(book);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  removeBook: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await Book.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: "Не удалось удалить книгу. Укажите верный ID",
        });
      }

      return res.json({
        message: "Книга успешно удалена",
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  editBook: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, author, genre } = req.body;
      const edited = await Book.findByIdAndUpdate(
        id,
        { title, author, genre },
        { new: true }
      );

      if (!edited) {
        return res.status(400).json({
          error: "Не удалось изменить название. Проверь правильность ID",
        });
      }

      return res.json(edited);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      return res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },

  getAllBook: async (req, res) => {
    try {
      const book = await Book.find();

      return res.json(book);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getBookByGenresId: async (req, res) => {
    const { id } = req.params;

    try {
      const book = await Book.find({ genre: id });

      return res.json(book);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
