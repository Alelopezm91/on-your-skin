require("dotenv").config();

const mongoose = require("mongoose");
const products= require("../data/men-products.json");
const Products = require("../models/men-products.model");

mongoose.connection.once("open", () => {
  console.info(
    `*** Connected to the database ${mongoose.connection.db.databaseName} ***`
  );

  mongoose.connection.db
    .dropDatabase()
    .then(() => `${mongoose.connection.db.databaseName} dropped!`)
    .then(() => {
      products.forEach((products) => {
        new Products({
          ...products
          fashion_product_type: ["Slips", "Boxers","Camisetas Interiores", "Calzoncillos largos "],
          description: "lorem sentence grater than 10 characters",
          capacity: Math.floor(Math.random() * 100 + 10),
        })
          .save()
          .then((prod) => console.log(`${prod.name} has been created!`))
          .catch((err) => console.error(err));
      });
    })
    .catch((err) => console.error("mongoose", err));
});
