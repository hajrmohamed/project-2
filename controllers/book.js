const Book = require("../models/Book");


exports.book_index_get = (req, res) => {
    Book.find().populate("mallDetails") //query to the db, find all the articles in db ,
      //like fetch if ok go to .then if not exit succesfully go to .catch and get error
    
      .then((book) => {
        console.log(book.mallDetails)
        res.render("book/index", { book }); 
     })
      .catch((err) => {
        console.log(err);
      });
  };


  exports.book_index_post= (req, res) => {
    console.log(req.body);
    let book = new Book(req.body); //from the form we take it
    //save book in db
    book
      .save()
      .then(() => {
        res.redirect("/book/index");
      })
      .catch((err) => {
        console.log(err);
        res.send("please try again later!");
      });
  };



  