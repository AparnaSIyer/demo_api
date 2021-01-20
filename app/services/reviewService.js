const Review = require('../models/Review');

exports.saveReview = async (reviewData) => {
    let review = new Review({
        stars: reviewData.stars,
        review: reviewData.review,
        product: reviewData.product_id
    });

    try {
        return await Review.create(review)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                return err;
            });
    } catch (ex) {
        throw ex;
    }
};

exports.getAllReviews = async (res, req, next) => {
    return await Review.find({})
        .populate('product')
        .then((result) => {
            return result;
        })
        .catch((err) => {
            if (err.response_code === undefined || err.response_code === null) return err;
            throw err;
        });
};
