const Product = require('../models/Product');
const Review = require('../models/Review');
const { BrandModel, CatalogModel } = require('../models/NestedModel');
exports.saveProduct = async (productData) => {
    let product = new Product({
        name: productData.name,
        quantity: productData.quantity,
        catalog: productData.catalog,
        brand: productData.brand
    });

    try {
        return await Product.create(product)
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

exports.getAllProducts = async (res, req, next) => {
    return await Product.find({})
        .then((result) => {
            return result;
        })
        .catch((err) => {
            if (err.response_code === undefined || err.response_code === null) return err;
            throw err;
        });
};

exports.getReviewsByProduct = async (req) => {
    console.log(req.product_id);

    return await Review.find({ product: req.product_id })
        .populate('product')
        .then((result) => {
            console.log('result', result);
            return result;
        })
        .catch((err) => {
            if (err.response_code === undefined || err.response_code === null) return err;
            throw err;
        });
};
