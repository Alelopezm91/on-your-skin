const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const products = require("../controllers/products.controller");
const auth = require('../controllers/auth.controller')

//Misc routes //
router.get("/", misc.home);
router.get("/products", products.list);

//Auth routes//
router.get("/register", auth.register)
router.get("/login", auth.login)







module.exports = router;