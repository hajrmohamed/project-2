const User = require("../models/User");
const bcrypt = require("bcrypt");
//const passport = require('passport')
const passport = require("../lib/passportConfig");

exports.auth_signup_get = (req, res) => {
  res.render("auth/signup");
};

exports.auth_signin_get = (req, res) => {
  res.render("auth/signin");
};

exports.profile_update_post = (req, res) => {
  const oldpassword = req.body.oldpassword;
  const newpassword = req.body.newpassword;
  User.findById(req.session.passport.user).then((user) => {
    console.log(user);
    const password = user.password;
    const oldHash = bcrypt.hashSync(oldpassword, 10);
    const ver = bcrypt.compareSync(oldpassword, password);
    console.log(`1 ${ver} ${password} ${oldHash}`);

    if (ver) {
      let hash = bcrypt.hashSync(newpassword, 10);
      user.password = hash;
      console.log(hash);
      console.log(user.password);
    }

    user
      .save()
      .then(user=> {res.render("profile/index", {user})})
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.auth_signup_post = (req, res) => {
  console.log(req.body);
  let user = new User(req.body);
  let hash = bcrypt.hashSync(req.body.password, 10);
  console.log(hash);

  user.password = hash;

  user
    .save()
    .then(() => {
      res.redirect("/auth/signin");
    })
    .catch((err) => {
      console.log(err);
      res.send(
        "Something went wrong, please try again later! Salman says you're a numpty!"
      );
    });
};

exports.auth_signin_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/signin",
});

exports.auth_signout_get = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/auth/signin");
  });
};
