const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
    products: [{type: Schema.Types.ObjectId, ref: 'men-product' }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    adress:  {
        city: String,
        zipCode: Number,
    },
    RSVP: {
        type: Number
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: 'men-products'
    }
}) 


const Product = mongoose.model('products', userSchema)
module.exports = Product 
