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
    console.log(req.file);

    let mall = new Mall(req.body); //we take it from the form

    let imagePath = "/uploads/" + req.file.filename;
    console.log(imagePath);
    mall.image = imagePath;

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
    Mall.find() //query to the db, find all the malls in db ,
      //like fetch if ok go to .then if not exit succesfully go to .catch and get error
      .then((malls) => {
   
        res.render("mall/index", { malls }); //same as malls: malls only if the value is same - write it in ejs
      })
      .catch((err) => {
        console.log(err);
      });
  };

  exports.mall_show_get = (req, res) => {
    Mall.findById(req.query.id) 
      .then((malls) => {
        console.log(malls)
        res.render("mall/details", { malls }); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  exports.mall_delete_get = (req, res) => {
    Mall.findByIdAndDelete(req.query.id)
      .then(() => {
        res.redirect("/mall/index");
      })
      .catch((err) => {
        console.log(err);
      });
  };