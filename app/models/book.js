const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookSchema= new Schema({
    isbn:{
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    author_name:{
        type: String,
        required: true
    },
    category_name:{
        type:String,
        required: true
    },
   
}) ;

const Book = mongoose.model('Book',bookSchema);
module.exports = Book;