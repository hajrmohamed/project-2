const Company = require("../models/Company");

exports.company_create_get = (req, res) => {
    Company.find()

    .then((companies) => {
        res.render("company/add", { companies });
      })
      .catch((err) => {
        console.log(err);
        res.send("please try again later!");
      });
};

//HTTP POST
exports.company_create_post = (req, res) => {

    // console.log(req.body);
    // console.log(req.file);

    let company = new Company(req.body); //we take it from the form

    let imagePath = "/uploads/" + req.file.filename;
    console.log(imagePath);
    company.image = imagePath;

    //save company in db
    company.save()
      .then(() => {
        res.redirect("/company/index");
      })
      .catch((err) => {
        console.log(err);
        res.send("please try again later!");
      });
  };

  exports.company_index_get = (req, res) => {
    Company.find() //query to the db, find all the companies in db ,
      //like fetch if ok go to .then if not exit succesfully go to .catch and get error
      .then((companies) => {
   
        res.render("company/index", { companies }); //same as companies: companies only if the value is same - write it in ejs
      })
      .catch((err) => {
        console.log(err);
      });
  };

  exports.company_show_get = (req, res) => {
    Company.findById(req.query.id) 
      .then((companies) => {
        // console.log(companies)
        res.render("company/details", { companies }); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  exports.company_delete_get = (req, res) => {
    Company.findByIdAndDelete(req.query.id)
      .then(() => {
        res.redirect("/company/index");
      })
      .catch((err) => {
        console.log(err);
      });
  };