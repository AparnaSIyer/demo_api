const path = require('path');
const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

router.get('/api/review/getAll', reviewController.getAllReviews);
router.post('/api/review/save', reviewController.saveReview);

module.exports = router;
