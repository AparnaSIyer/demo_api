const path = require('path');
const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

router.get('/api/review/getAll', reviewController.getAllReviews);
router.post('/api/review/save', reviewController.saveReview);
router.post('/api/catalog/save', reviewController.saveCatalog);
router.post('/api/brand/save', reviewController.saveBrand);
router.post('/api/retailer/save', reviewController.saveRetailer);
router.get('/api/catalog/display', reviewController.displayCatalogItems);
module.exports = router;
