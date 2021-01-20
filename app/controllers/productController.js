const productService = require('../services/productService');

exports.getAllProducts = (req, res, next) => {
    productService
        .getAllProducts(req.body)
        .then((result) => {
            return res.json(result).send();
        })
        .catch((err) => {
            res.json(err).send();
        });
};

exports.saveProduct = (req, res, next) => {
    productService
        .saveProduct(req.body)
        .then((result) => {
            console.log('result');
            return res.json(result).send();
        })
        .catch((err) => {
            console.log(err);
            res.json(err).send();
        });
};
exports.getReviewsByProduct = (req, res, next) => {
    productService
        .getReviewsByProduct(req.body)
        .then((result) => {
            console.log('result');
            return res.json(result).send();
        })
        .catch((err) => {
            console.log(err);
            res.json(err).send();
        });
};
