import mongoose from "mongoose";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";

import products from "./data/products.js";
import users from "./data/users.js";

//use mongouri which is stored in .env file
dotenv.config();

//open connection via config/dbConfig.js
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany(); //deletes everything before importing. Use await because it returns a promise
    await Product.deleteMany();
    await User.deleteMany();

    //import User Schema to MongoDB
    const createdUsers = await User.insertMany(users); //users returned as array

    const adminUser = createdUsers[0]._id; //set admin user Id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }; //for each product in products add the admin user to the data and put new obj in sampleProducts[]
    });

    await Product.insertMany(sampleProducts);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Destroyed");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();
