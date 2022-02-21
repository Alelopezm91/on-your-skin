const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const products = require("../controllers/products.controller");


router.get("/", misc.home);
router.get("/products", products.list);

module.exports = router;