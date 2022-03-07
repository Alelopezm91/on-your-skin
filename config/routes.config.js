const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const products = require("../controllers/products.controller");
const user = require("../controllers/user.controller");
const auth = require("../controllers/auth.controller");
const passport = require("passport");
const authMiddleware = require("../middlewares/auth.middleware");



const SCOPES = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
]

//Misc routes //
router.get("/", misc.home);

//Product routes//
router.get("/products", products.list);
router.get("/products/detail/:id", products.detail);
router.get("/products/:page", products.list);

//On your skin routes
router.get('/', authMiddleware.isAuthenticated, misc.home) 

//Auth routes//
router.get("/register", auth.register);
router.post("/register", auth.doRegister);
router.get("/login", auth.login);
router.post("/login", auth.dologin);
router.get("/activate/:token", auth.activate);
router.get(
  "/login/google",
  passport.authenticate("google-auth", { scope: SCOPES })
);
router.get("/auth/google/callback", auth.doLoginGoogle);
router.get("/logout", auth.logout);

/* User routes */
router.get('/profile', authMiddleware.isAuthenticated, user.profile)
router.post('/like/:id', authMiddleware.isAuthenticated, user.doLike)



module.exports = router;
