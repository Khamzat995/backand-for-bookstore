const { Router } = require("express");
const { bookController } = require("../controllers/books.controllers");

const router = Router();

router.post("/book", bookController.createBook);
router.delete("/book/:id", bookController.removeBook);
router.patch("/book/:id", bookController.editBook);
router.get("/book/:id", bookController.getBookById);
router.get("/books", bookController.getAllBook);
router.get("/books/genre/:id", bookController.getBookByGenresId);

module.exports = router;
