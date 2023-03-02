// CRUD API's

// Model
const User = require("../models/User");

// HTTP GET - Index
exports.profile_index_get = (req, res) => {
    console.log(req.session.passport.user);
    User.findById(req.session.passport.user)
    .then(user => {
        // console.log(user.findById(req.user._id))
        res.render("profile/index", { user }) // Users: Users
    })
    .catch(err => {
        console.log(err);
    })
}

exports.profile_update_get = (req, res) => {
    User.findByIdAndUpdate(req.session.passport.user)
      .then((users) => {
        console.log(req.session.passport.user)
        res.render("profile/edit", { users });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //HTTP POST - article (edit)
  exports.profile_update_post = (req, res) => {
    User.findByIdAndUpdate(req.body.id, req.body)
      .then(() => {
        res.redirect("/profile/index");
      })
      User.save()
      .catch((err) => {
        console.log(err);
      });
  };