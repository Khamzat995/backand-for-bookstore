const { Router } = require("express");
const { authorController } = require("../controllers/authors.controllers");

const router = Router();

router.post("/author", authorController.createAuthor);
router.get("/authors", authorController.getAllAuthors);
router.patch("/author/:id", authorController.editAuthor);
router.delete("/author/:id", authorController.removeAuthor);

module.exports = router;
