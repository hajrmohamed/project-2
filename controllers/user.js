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