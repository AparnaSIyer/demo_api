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
