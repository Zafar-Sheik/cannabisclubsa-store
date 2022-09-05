import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      //References the user that the order belongs to
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          //An order item links to a product
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],

    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    paymentResult: {
      //this is for paypal
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String }, //paypal email
    },

    taxPrice: {
      type: Number,
      required: true,
      default: 0.15, //default set to VAT
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0, //default set to VAT
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0, //default set to VAT
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: 0,
    },

    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },

    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true, //'Created At' and 'Updated At' fields created automatically
  }
);

const Order = mongoose.model("Order", orderSchema); //create a model from the above schema

export default Order; //export the model
