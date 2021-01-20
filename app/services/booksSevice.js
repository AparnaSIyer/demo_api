const Book = require('../models/book');

exports.saveBook = async (BooksData) => {
    let bookvar = new Book({
        isbn: BooksData.isbn,
        title: BooksData.title,
        author_name: BooksData.author_name,
        category_name: BooksData.category_name
    });
    try {
        return await bookvar.save().then((result) => {
            return result;
        });
    } catch (err) {
        if (err.response_code === undefined || err.response_code === null) return err;
        throw err;
    }
};

exports.getAllBooks = async (res, req, next) => {
    return await Book.find({})
        .then((result) => {
            return result;
        })
        .catch((err) => {
            if (err.response_code === undefined || err.response_code === null) return err;
            throw err;
        });
};

exports.updateBook = async (BooksData, id) => {
    return await Book.findByIdAndUpdate(Object.values(id), BooksData, {
        useFindAndModify: false
    })
        .then((data) => {
            if (!data) {
                return 'Data not found';
            } else
                return Book.find({ _id: Object.values(id) }).then((result) => {
                    return result;
                });
        })
        .catch((err) => {
            return err;
        });
};

exports.deleteBook = async (params) => {
    try {
        return await Book.deleteOne({ _id: params.id })
            .then((result) => {
                if (!result) {
                    return 'No data found';
                } else {
                    return 'Deleted';
                }
            })
            .catch((err) => {
                if (err.response_code === undefined || err.response_code === null) return err;
            });
    } catch (err) {
        if (err.response_code === undefined || err.response_code === null) console.log(err);
        throw err;
    }
};
