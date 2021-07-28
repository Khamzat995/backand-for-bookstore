const mongoose = require("mongoose");

const genresSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const Genres = mongoose.model("Genres", genresSchema);

module.exports = Genres;
