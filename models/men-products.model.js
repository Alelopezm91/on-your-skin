const mongoose = require ("mongoose");
const Schema= mongoose.Schema;

const menProductsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Name is required"],
    },
    main_image: {
      type: String,
      required: [true, "Main picture is required"],
    },
    image_2: {
      type: String,
    },
    image_3: {
      type: String,
    },
    image_4: {
      type: String,
    },
    fashion_product_type: {
      type: String,
      enum:["Slips","Boxers","Camisetas Interiores", "Calzoncillos largos"],
    },
    fashion_main_description: {
      type: String,
      minlength: [20, "Descrpition must coint at least 20 characters "],
    },
    sizes: {
      type: String,
    },
    fashion_secundary_color: {
      type: String,
    },
      product_mp_id:{
        type:String,
        required: true,
      }
  
  },
  { timestamps: true })

  const Product = mongoose.model("Product", menProductsSchema);
  module.exports = Product;