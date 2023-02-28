const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const user = require('../models/User')

// This saves the ID in the session
passport.serializeUser(function(user,done){
   return done(null, user.id)
})

// Retrieves the user from the database according to the ID from the session
passport.deserializeUser(function(id, done){
    user.findById(id, function(err, user){
       return done (err, user)
    })
})

passport.use(new localStrategy({
    usernameField: 'emailAddress',
    passwordField: 'password'
},
    function(emailAddress, password, done){
        user.findOne({emailAddress: emailAddress}, function(err, user){
            if(err){return done(err)}
            if(!user){return done(null, false)}
            if(!user.verifyPassword(password)) {return done(null, false)}
            return done(null, user)
        })
    }
))

module.exports = passport