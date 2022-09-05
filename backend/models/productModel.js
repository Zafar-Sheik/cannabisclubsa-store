import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      //This rating is the individual review rating
      type: Number,
      required: true,
      default: 0,
    },
    comment: {
      type: String,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", //adds relationship between review and user. Every product was created by an admin user.
    },
  },
  {
    timestamps: true, //'Created At' and 'Updated At' fields created automatically
  }
);

const productSchema = mongoose.Schema(
  {
    //Which admin user created the product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", //adds relationship between product and user. Every product was created by an admin user.
    },

    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    qtyInStock: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: true,
      unique: false,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    rating: {
      //This rating is the products average rating.
      type: Number,
      required: true,
      default: 0,
    },

    reviews: [reviewSchema],

    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true, //'Created At' and 'Updated At' fields created automatically
  }
);

const Product = mongoose.model("Product", productSchema); //create a model from the above schema

export default Product; //export the model
