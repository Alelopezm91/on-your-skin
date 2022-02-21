require("dotenv").config();

const mongoose = require("mongoose");
require("../config/db.config");
const products= require("../data/men-products.json");
const Product = require("../models/men-products.model");

mongoose.connection.once("open", () => {
  console.info(
    `*** Connected to the database ${mongoose.connection.db.databaseName} ***`
  );

  mongoose.connection.db
    .dropDatabase()
    .then(() => `${mongoose.connection.db.databaseName} dropped!`)
    .then(() => {
      products.forEach((product) => {
        new Product(product)
          .save()
          .then((prod) => console.log(`${prod.title} has been created!`))
          .catch((err) => console.error(err));
      });
    })
    .catch((err) => console.error("mongoose", err));
});
