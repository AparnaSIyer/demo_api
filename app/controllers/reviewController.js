const { RetailerModel } = require('../models/NestedModel');
const reviewService = require('../services/reviewService');

exports.getAllReviews = (req, res, next) => {
    reviewService
        .getAllReviews(res, req, next)
        .then((result) => {
            return res.json(result).send();
        })
        .catch((err) => {
            res.json(err).send();
        });
};

exports.saveReview = (req, res, next) => {
    reviewService
        .saveReview(req.body)
        .then((result) => {
            return res.json(result).send();
        })
        .catch((err) => {
            console.log(err);
            res.json(err).send();
        });
};
//save catalog
exports.saveCatalog = (req, res, next) => {
    reviewService
        .saveCatalog(req.body)
        .then((result) => {
            return res.json(result).send();
        })
        .catch((err) => {
            console.log(err);
            res.json(err).send();
        });
};

//save brand
exports.saveBrand = (req, res, next) => {
    reviewService
        .saveBrand(req.body)
        .then((result) => {
            return res.json(result).send();
        })
        .catch((err) => {
            console.log(err);
            res.json(err).send();
        });
};

//save retailer
exports.saveRetailer = (req, res, next) => {
    reviewService
        .saveRetailer(req.body)
        .then((result) => {
            return res.json(result).send();
        })
        .catch((err) => {
            console.log(err);
            res.json(err).send();
        });
};

exports.UpdateCatalogBrand = (req, res, next) => {
    reviewService
        .UpdateCatalogBrand(req.body, req.params)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
};

exports.displayCatalogItems = (req, res, next) => {
    reviewService
        .displayCatalogItems(res, req, next)
        .then((result) => {
            return res.json(result).send();
        })
        .catch((err) => {
            res.json(err).send();
        });
};
