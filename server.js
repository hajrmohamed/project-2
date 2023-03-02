const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('./lib/passportConfig')


const port = 3000


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

//intialize the layout
const expressLayout = require('express-ejs-layouts')

//
app.use(expressLayout)





//import routes
const indexRoute = require('./routes/index')
const mallRoute = require("./routes/malls");
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const bookRoute = require('./routes/book')
const compRoute = require('./routes/companies')
const EventRoute = require('./routes/events')


app.use(session({
    secret: 'supersecuresecret!',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 604800}
}))
app.use(passport.initialize())
app.use(passport.session())


app.use(function(req, res, next) {
    // console.log(req.user);
    res.locals.currentUser = req.user;
    next();
})

//Mount routes
app.use('/', indexRoute)
app.use('/', authRoute)
app.use("/", mallRoute);
app.use("/", userRoute);
app.use("/", bookRoute);
app.use("/", compRoute);
app.use("/", EventRoute);





// app.use(express.static('public')) // for bootstrab
app.use(express.static(__dirname + "/public"));


mongoose.set('strictQuery', false)

require('dotenv').config()


//Node.js to look in a folder called views for all the ejs files.
app.set("view engine", "ejs");




mongoose.connect(process.env.park_APP,
    {
        useNewUrlParser: true,
        useUnifiedTopology : true
    },
    () => {
        console.log('MongooDB connected')
    }
)

// app.get('/mall/index', (req,res) => {
//     res.render('home/another', {title:'malls'},)
// })

// app.get('/profile', (req,res) => {
//     res.render('profile/index', {title:'profile'},)
// })

// app.get('/a', (req,res) => {
//     res.render('home/another')
// })



//********************************************************************************* */

// app.get('/b', (req,res) => {
//     res.render('auth/signin')
// })

