module.exports.register = (req,res,next) => {
  res.render('auth/register')
}

module.exports.doRegister = (req,res,next) =>{
    res.render('auth/register',{
        errors: errors,
        user: user
    })
}

module.exports.login = (req,res,next) =>{
    res.render('auth/login')
}
