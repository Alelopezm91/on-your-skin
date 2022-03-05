module.exports.isAuthenticated = (req,res,next) =>{
    if(req.user){
        next();
    }else {
        res.redirect('/profile')
    }
}

module.exports.isNotAuthenticated = (req,res,next) =>{
    if(!req.user){
        next();
    }else {
        res.redirect('/login')
    }
}