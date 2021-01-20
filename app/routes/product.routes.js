const path = require('path');
const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/api/product/getAll', productController.getAllProducts);
router.post('/api/product/save', productController.saveProduct);
router.get('/api/product/getReview', productController.getReviewsByProduct);
module.exports = router;
