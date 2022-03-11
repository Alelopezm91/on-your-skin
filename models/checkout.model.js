const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checkoutSchema = new mongoose.Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  adress: {
    city: String,
    zipCode: Number,
  },
  RSVP: {
    type: Number,
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Checkout = mongoose.model("checkout", checkoutSchema);
module.exports = Checkout;
