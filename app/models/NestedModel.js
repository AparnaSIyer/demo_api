const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let RetailerSchema = new Schema({
    brand: [{ type: Schema.Types.ObjectId, ref: 'brand' }],
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

let BrandSchema = new Schema({
    brandName: {
        type: String,
        required: true
    }
});

let CatalogSchema = new Schema({
    catalogName: {
        type: String,
        required: true
    },
    brand: [{ type: Schema.Types.ObjectId, ref: 'brand' }]
});

const RetailerModel = mongoose.model('retailer', RetailerSchema);
const BrandModel = mongoose.model('brand', BrandSchema);
const CatalogModel = mongoose.model('catalog', CatalogSchema);

module.exports = { CatalogModel, BrandModel, RetailerModel };
