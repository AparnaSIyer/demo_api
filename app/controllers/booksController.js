const booksService = require("../services/booksSevice");

exports.saveBook = (req, res, next) => {
  booksService
    .saveBook(req.body)
    .then((result) => {
      console.log("Result");
      console.log(result);
      return res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.getAllBooks = (req, res, next) => {
  booksService
    .getAllBooks(req.body)
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.updateBook = (req, res, next) => {
  booksService
    .updateBook(req.body, req.params)
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.deleteBook = (req, res, next) => {
  booksService
    .deleteBook(req.params)
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    });
};
