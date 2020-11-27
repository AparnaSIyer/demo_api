const path=require('path');
const express=require('express');
const booksController=require('../controllers/booksController');
const router=express.Router();
//get book by title
//get book by author
//delete book
//update book details
//get all book
router.get("/api/getAllBooks",booksController.getAllBooks);
//save book
router.post("/api/saveBook",booksController.saveBook);
//update book details
router.put("/api/updateBook/:id",booksController.updateBook);
//delete book
router.delete("/api/deleteBook/:id",booksController.deleteBook);
module.exports=router;