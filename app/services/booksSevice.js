const Book = require('../models/book');


exports.saveBook = async (BooksData) => {
  
  let bookvar=new Book({"isbn":BooksData.isbn,
                "title":BooksData.title,
                "author_name":BooksData.author_name,
                "category_name":BooksData.category_name});


try {
  return await bookvar.save().then((result) => {
    return result;
  });
} catch (err) {
  if (err.response_code === undefined || err.response_code === null)
    console.log(err);
  throw err;
}

   
  };
  
exports.getAllBooks = async (res,req,next) => {
  // console.log("BooksData",BooksData);
  
  return await Book.find({})
  .then(result => {
        return result;
  })
  .catch(err => {
      if (err.response_code === undefined || err.response_code === null)
          console.log(err)
      throw err;
  })
};

exports.updateBook = async (BooksData,id) => {
  console.log(id);
  return await Book.findByIdAndUpdate(Object.values(id),BooksData, { useFindAndModify: false })
  .then(data => {
    if (!data) {
      return "Data not found"
    } else 
        return Book.find({'_id':Object.values(id)})
        .then(result => {
            return result;
    })
  })
  .catch(err => {
    console.log(err);
  });
};

exports.deleteBook = async function (id) {
  let product = await Book.deleteOne();
  Book.find({'_id':Object.values(id)})
  return await Book.deleteOne({'_id ':Object.values(id)})
      .then(result => {
          if (!result) {
              return 'No data found';
          }
          else {
            return 'Deleted';
          }
      })
      .catch(err => {
          if (err.response_code === undefined || err.response_code === null)
              throw err;
          throw err;
      });
}
