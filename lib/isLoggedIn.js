module.exports = (req,res) => {
    if(!req.user){
        res.redirect('/auth/signin')
    }
    else{ next() }
}