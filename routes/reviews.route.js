const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controllers");

const router = Router();

router.post("/review", reviewController.createReview);
router.delete("/review/:id", reviewController.removeReview);
router.get("/review/book/:id", reviewController.getReviewByBookId);
router.get("/reviews", reviewController.getAllReview);

module.exports = router;
