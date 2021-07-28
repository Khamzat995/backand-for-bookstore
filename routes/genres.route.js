const { Router } = require("express");
const { genresController } = require("../controllers/genres.controllers");

const router = Router();

router.post("/genre", genresController.createGenres);
router.delete("/genre/:id", genresController.removeGenres);
router.get("/genres", genresController.getAllGenres);
router.get("/genre/:id", genresController.getGenresById);
router.patch("/genre/:id", genresController.editGenres);

module.exports = router;
