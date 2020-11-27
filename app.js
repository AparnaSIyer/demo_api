const express = require("express");
const members = require("./Members");
const app = express();
const mongoose=require("mongoose");
const booksController=require('../demoapi/app/controllers/booksController');
const BodyParser=require('body-parser');


const PORT = process.env.PORT || 8080;
let dbUri="mongodb+srv://aparna_31:test123@cluster0.1d44q.mongodb.net/node-tuts?retryWrites=true&w=majority";

mongoose.connect(dbUri,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((err)=>console.log(err));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
const bookRoutes = require("../demoapi/app/routes/book.routes");
app.use(bookRoutes);

app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
})



