const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    stars: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
