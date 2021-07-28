const Author = require("../models/Author.model");

module.exports.authorController = {
  createAuthor: async (req, res) => {
    const { name, inform } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "Необходимо указать имя автора",
      });
    }

    if (!inform) {
      return res.status(400).json({
        error: "Необходимо описать автора",
      });
    }

    try {
      const author = await Author.create({ name, inform });

      return res.json(author);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  removeAuthor: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await Author.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: "Не удалось удалить автора. Укажите верный ID",
        });
      }

      return res.json({
        message: "Автор успешно удален",
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getAllAuthors: async (req, res) => {
    try {
      const author = await Author.find();

      return res.json(author);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  editAuthor: async (req, res) => {
    const { name, inform } = req.body;
    const { id } = req.params;

    if (!name) {
      return res.status(400).json({
        error: "Необходимо указать новое имя автора",
      });
    }

    if (!inform) {
      return res.status(400).json({
        error: "Необходимо указать новое описание автора",
      });
    }

    try {
      const edited = await Author.findByIdAndUpdate(
        id,
        { name, inform },
        { new: true }
      );

      if (!edited) {
        return res.status(400).json({
          error: "Не удалось изменить автора. Проверь правильность ID",
        });
      }

      return res.json(edited);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
