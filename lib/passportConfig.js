const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const user = require('../models/User')

// This saves the ID in the session
passport.serializeUser(function(user,done){
    done(null, user.id)
})

// Retrieves the user from the database according to the ID from the session
passport.deserializeUser(function(id, done){
    user.findById(id, function(err, user){
        done (err, user)
    })
})

passport.use(new localStrategy({
    usernameField: 'emailAdress',
    passwordField: 'passsword'
},
    function(emailAdress, passsword, done){
        user.findOne({emailAdress: emailAdress}, function(err, user){
            if(err){return done(err)}
            if(!user){return done(null, false)}
            if(!user.verifyPassword(passsword)) {return done(null, false)}
            return done(null, user)
        })
    }
))

module.exports = passport