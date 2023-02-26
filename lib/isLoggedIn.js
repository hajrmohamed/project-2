module.exports = (req, res, next)=> {
    //if there is no user it will takes it back to signin page
    if(!req.user){
        res.redirect("/auth/signin")
    } else {
        next()
    }
}


