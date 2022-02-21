const mongoose = require("mongoose");
const Products = require("../models/men-products.model");
const categories = Object.keys(require("../data/categories.json"));

module.exports.list = (req, res, next) => {
  Products.find({ parent: true })
    .sort({ createdAt: "desc" })
    .limit(20)
    .then((products) => res.render("products/list", { products }))
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
  Products.findById(req.params.id)
    .then((product) => {
      if (product) {
        res.render("products/detail", { product });
      } else {
        res.redirect("/products");
      }
    })
    .catch((error) => next(error));
};


