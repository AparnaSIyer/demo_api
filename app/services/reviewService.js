const Review = require('../models/Review');
const { BrandModel, CatalogModel, RetailerModel } = require('../models/NestedModel');
const Product = require('../models/Product');
const { propfind } = require('../routes/review.routes');
const { json } = require('body-parser');
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

exports.saveCatalog = async (data) => {
    let catalogname = data.catalogName;
    let brandId = data.brandId;

    let parmsCatalog = new CatalogModel({
        catalogName: catalogname,
        brand: brandId ? brandId : []
    });
    let existsCatalog = await CatalogModel.find({}).then((result) => {
        let existsCatArray = result.map((catalog) => catalog.catalogName.toLowerCase() === parmsCatalog.catalogName.toLowerCase());
        if (existsCatArray.includes(true)) {
            return true;
        }
    });
    console.log(await CatalogModel.find({}).then((result) => console.log(result)));

    if (!existsCatalog) {
        console.log('hey');
        await CatalogModel.create(parmsCatalog).then((result) => console.log('created'));
        return await CatalogModel.find({})
            .populate('brand')
            .then((result) => {
                return result;
            })
            .catch((err) => {
                if (err.response_code === undefined || err.response_code === null) return err;
                throw err;
            });
    } else {
        return {
            message: 'Already exists',
            data: await CatalogModel.find({})
                .populate('brand')
                .then((result) => {
                    return result;
                })
                .catch((err) => {
                    if (err.response_code === undefined || err.response_code === null) return err;
                    throw err;
                })
        };
    }
};

exports.saveBrand = async (data) => {
    //currently ading one brand at a time
    let brand = new BrandModel({
        brandName: data.brandName
    });
    await BrandModel.create(brand).then((result) => console.log('created'));
    return await BrandModel.find({})
        .then((result) => {
            return result;
        })
        .catch((err) => {
            if (err.response_code === undefined || err.response_code === null) return err;
            throw err;
        });
};

exports.saveRetailer = async (data) => {
    let paramsBrands = data.brandId;
    let dbBrands = await BrandModel.find({}).then((result) => {
        return result;
    });

    let retailer = new RetailerModel({
        name: data.name,
        address: data.address,
        brand: paramsBrands ? paramsBrands : []
    });

    await RetailerModel.create(retailer).then((result) => console.log(result));
    return await RetailerModel.find({})
        .populate('brand')
        .then((result) => {
            return result;
        })
        .catch((err) => {
            if (err.response_code === undefined || err.response_code === null) return err;
            throw err;
        });
};

exports.saveItem = async (itemData) => {
    let item = new Product({
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

exports.displayCatalogItems = async () => {
    var prodList = [];

    let products = await Product.find({})
        .populate('brand')
        .populate('catalog')
        .then((result) => {
            return result;
        });
    let catalogNames = [];
    let brandIds = [];
    let catObjArray = [];
    let brandObjArray = [];
    let finalCatalog = { name: 'root', children: [] };
    products.map((product) => {
        // console.log('--', product.brand);
        if (!brandIds.includes(product.brand._id)) {
            brandIds.push(new Object(product.brand._id));
            brandObjArray.push({ name: product.brand.brandName, items: [] });
        }

        if (!catalogNames.includes(product.catalog.catalogName)) {
            catalogNames.push(product.catalog.catalogName);
            catObjArray.push({ name: product.catalog.catalogName, brands: [] });
        }
    });

    finalCatalog.children = catObjArray;
    let root = finalCatalog.children;

    products.map((product) => {
        let catName = product.catalog.catalogName;

        // delete product.age;
        root.map((ch) => {
            if (ch.name === catName) {
                let item = { itemName: product.name, quantity: product.quantity, brand: product.brand.brandName };

                // console.log('+++', item);

                let finalProd = {
                    brandName: product.brand.brandName,
                    item: item
                };

                ch.brands.push(finalProd);
            }
        });

        // delete product.catalog;
    });
    console.log(root);

    return root;
    //after adding all the brands and catalog now loop through each product to place them in correct position
    // products.map((product) => {
    //     // console.log(product);
    // });
    // // console.log(brand);
};

// exports.UpdateCatalogBrand = async (CatalogData, id) => {
//     return await CatalogModel.findByIdAndUpdate(Object.values(id), CatalogData, {
//         useFindAndModify: false
//     })
//         .then((data) => {
//             if (!data) {
//                 return 'Data not found';
//             } else
//                 return Book.find({ _id: Object.values(id) }).then((result) => {
//                     return result;
//                 });
//         })
//         .catch((err) => {
//             return err;
//         });
// };
