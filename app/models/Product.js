const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    departments: {
        type: Array,
        required: false
    }
});

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
