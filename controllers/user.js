// CRUD API's

// Model
const User = require("../models/User");
// const Author = require('../models/Author')

// HTTP GET - Load Article form
// exports.article_create_get = (req, res) => {
//     res.render("article/add")
// }
// HTTP GET - Load user form
// exports.article_create_get = (req, res) => {
//     Author.find()
//         .then((authors) => {
//             res.render("article/add", { authors })
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }


// HTTP POST - To Post the data
// exports.user_create_post = (req, res) => {
//     console.log(req.body);
//     let user = new user(req.body);

//     // Save user in the database
//     user.save()
//     .then(() => {
//         res.redirect("/profile/index");
//     })
//     .catch((err) => {
//         console.log(err);
//         res.send("Please try again later!!!");
//     })
// }

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
    // res.render("profile/index")
}

// HTTP GET - Article By ID
// exports.profile_show_get = (req, res )=> {
//     user.findById(req.query.id)
//     .then(user => {
//         res.render("article/detail", {article});
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

//HTTP DELETE ARTICLE
// exports.article_delete_get = (req,res) => {
//     Article.findByIdAndDelete(req.query.id)
//     .then(() => {
//         res.redirect('/article/index')
//     })
//     .catch(err => {
//         console.log(err)
//     })

// }
// HTTP POST - To Post the data
// exports.user_index_get = (req, res) => {
//     user.findById(req.query.id)
//     .then(users => {
//         res.render("profile/index", {users}) // articles: articles
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }