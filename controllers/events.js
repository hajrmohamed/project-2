const Event = require("../models/Event");

exports.event_create_get = (req, res) => {
    Event.find()

    .then((events) => {
        res.render("event/add", { events });
      })
      .catch((err) => {
        console.log(err);
        res.send("please try again later!");
      });
};

//HTTP POST
exports.event_create_post = (req, res) => {

    // console.log(req.body);
    // console.log(req.file);

    let event = new Event(req.body); //we take it from the form

    let imagePath = "/uploads/" + req.file.filename;
    console.log(imagePath);
    event.image = imagePath;

    //save event in db
    event.save()
      .then(() => {
        res.redirect("/event/index");
      })
      .catch((err) => {
        console.log(err);
        res.send("please try again later!");
      });
  };

  exports.event_index_get = (req, res) => {
    Event.find() //query to the db, find all the events in db ,
      //like fetch if ok go to .then if not exit succesfully go to .catch and get error
      .then((events) => {
   
        res.render("event/index", { events }); //same as events: events only if the value is same - write it in ejs
      })
      .catch((err) => {
        console.log(err);
      });
  };

  exports.event_show_get = (req, res) => {
    Event.findById(req.query.id) 
      .then((events) => {
        // console.log(events)
        res.render("event/details", { events }); 
      })
      .catch((err) => {
        console.log(err);
      });
  };


  exports.event_update_get = (req, res) => {
    Event.findByIdAndUpdate(req.query.id)
      .then((events) => {
        res.render("event/edit", { events });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //HTTP POST - event (edit)
  exports.event_update_post = (req, res) => {
    Event.findByIdAndUpdate(req.body.id, req.body)
      .then(() => {
        res.redirect("/event/index");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  exports.event_delete_get = (req, res) => {
    Event.findByIdAndDelete(req.query.id)
      .then(() => {
        res.redirect("/event/index");
      })
      .catch((err) => {
        console.log(err);
      });
  };