const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const products = require("../controllers/products.controller");
const auth = require('../controllers/auth.controller')

//Misc routes //
router.get("/", misc.home);
router.get("/products", products.list);
router.get("/products/detail/:id", products.detail);
router.get("/products/:page", products.list);


//Auth routes//
router.get("/register", auth.register)
router.post("/register", auth.doRegister)
router.get("/login", auth.login)









module.exports = router;