const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const products = require("../controllers/products.controller");
const user = require("../controllers/user.controller");
const auth = require('../controllers/auth.controller')
const passport = require('passport');
const authMiddleware = require('../middlewares/auth.middleware');
const shopcart = require('../controllers/cart.controller')



const SCOPES = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"
  ]
  

//Misc routes //
router.get("/", misc.home);
router.get("/products", products.list);

//Profile routes
router.get("/profile", user.profile);



//On your skin shop
router.get("/cart", shopcart.cart)




//Auth routes//
router.get("/register", auth.register)
router.post("/register", auth.doRegister)
router.get("/login", auth.login)
router.post("/login", auth.dologin)
router.get('/activate/:token', auth.activate)
router.get('/login/google', passport.authenticate('google-auth', { scope: SCOPES  }))
router.get('/auth/google/callback', auth.doLoginGoogle)
router.get('/logout', auth.logout)











module.exports = router;