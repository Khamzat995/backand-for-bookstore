const Genres = require("../models/Genres.model");

module.exports.genresController = {
  createGenres: async (req, res) => {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "Необходимо указать название жанра",
      });
    }

    if (!description) {
      return res.status(400).json({
        error: "Необходимо описать жанр",
      });
    }

    try {
      const genre = await Genres.create({ name, description });

      return res.json(genre);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  removeGenres: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await Genres.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: "Не удалось удалить жанр. Укажите верный ID",
        });
      }

      return res.json({
        message: "Жанр успешно удален",
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getAllGenres: async (req, res) => {
    try {
      const genre = await Genres.find();

      return res.json(genre);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getGenresById: async (req, res) => {
    const { id } = req.params;

    try {
      const genre = await Genres.findById(id);

      if (!genre) {
        return res.status(404).json({
          error: "Жанр с таким ID не найден",
        });
      }

      return res.json(genre);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  editGenres: async (req, res) => {
    const { name, description } = req.body;
    const { id } = req.params;

    if (!name) {
      return res.status(400).json({
        error: "Необходимо указать новое название жанра",
      });
    }

    if (!description) {
      return res.status(400).json({
        error: "Необходимо указать новое описание жанра",
      });
    }

    try {
      const edited = await Genres.findByIdAndUpdate(
        id,
        { name, description },
        { new: true }
      );

      if (!edited) {
        return res.status(400).json({
          error: "Не удалось изменить жанр. Проверь правильность ID",
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
