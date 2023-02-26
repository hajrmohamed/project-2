const Mall = require("../models/Mall");

exports.mall_create_get = (req, res) => {
    Mall.find()

    .then((malls) => {
        res.render("mall/add", { malls });
      })
      .catch((err) => {
        console.log(err);
        res.send("please try again later!");
      });
};


//HTTP POST
exports.mall_create_post = (req, res) => {
    console.log(req.body);
    let mall = new Mall(req.body); //we take it from the form
    //save mall in db
    mall.save()
      .then(() => {
        res.redirect("/mall/index");
      })
      .catch((err) => {
        console.log(err);
        res.send("please try again later!");
      });
  };

  exports.mall_index_get = (req, res) => {
    Mall.find() //query to the db, find all the articles in db ,
      //like fetch if ok go to .then if not exit succesfully go to .catch and get error
      .then((malls) => {
   
        res.render("mall/index", { malls }); //same as articles: articles only if the value is same - write it in ejs
      })
      .catch((err) => {
        console.log(err);
      });
  };