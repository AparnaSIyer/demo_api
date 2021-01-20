const express = require('express');
const app = express();
const mongoose = require('mongoose');
const booksController = require('../demoapi/app/controllers/booksController');
const BodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

let dbUri = 'mongodb+srv://aparna_31:4nXsKPjaYA8BsspQ@cluster0.1d44q.mongodb.net/node-tuts?retryWrites=true&w=majority';
// mongodb+srv://aparna_31:4nXsKPjaYA8Bssp@cluster0.1d44q.mongodb.net/node-tuts?retryWrites=true&w=majority
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
const bookRoutes = require('./app/routes/book.routes');
const productRoutes = require('./app/routes/product.routes');
const reviewRoutes = require('./app/routes/review.routes');
app.use(bookRoutes);
app.use(productRoutes);
app.use(reviewRoutes);
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});

mongoose
    .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((err) => console.log(err));
