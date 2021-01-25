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
    catalog: { type: Schema.Types.ObjectId, ref: 'catalog' },
    brand: { type: Schema.Types.ObjectId, ref: 'brand' }
});
var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
