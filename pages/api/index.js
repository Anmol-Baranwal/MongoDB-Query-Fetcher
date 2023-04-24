//jshint esversion:6

import express from "express";
// import { json } from "body-parser";
// import cors from "cors";
import sampleData from "@/data/stats.json";
require("dotenv").config(); // for security purpose

const app = express();
const port = 5500;

// app.use(cors());
// app.use(json());

// use .env file for storing these values to avoid exposing it
const usernameMongoDB = process.env.MONGODB_USERNAME;
const passwordMongoDB = process.env.MONGODB_PASSWORD;

// MongoDB connection and schema definition goes here
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${usernameMongoDB}:${passwordMongoDB}@cluster0.fnyielu.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

// Define schema for User object
const { Schema } = mongoose;

const UserSchema = new Schema({
  // new mongoose.Schema
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  income: Number,
  car: {
    brand: String,
    model: String,
    year: Number,
  },
  gender: String,
  quote: String,
});

// Clear the users model before redefining it
delete mongoose.connection.models["users"];
const users = mongoose.model("users", UserSchema); // can also use _model(..)

// load sample data
sampleData.forEach(async (data) => {
  try {
    const userData = new users(data);
    const result = await userData.save();
    console.log("Data loaded successfully");
  } catch (error) {
    console.error("Error occured while loading data");
  }
});

// Routes for fetching the required data
app.get("/api/users/bmw_mercedes_income_less_5", async (req, res) => {
  try {
    let query = {
      $and: [
        { car: { $in: ["BMW", "Mercedes-Benz"] } },
        { income: { $lt: "$5.00" } },
      ],
    };
    // we can also use: { $or: [ { car: "BMW", income: {$lt: "$5.00"} }, { car: "Mercedes-Benz", income: {$lt: "$5.00"} } ] }
    const results = await users.find(query);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/users/male_phone_price_gt_10000", async (req, res) => {
  try {
    let query = {
      $and: [{ gender: "Male" }, { phone_price: { $gt: "10000" } }],
    };
    const results = await users.find(query);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// app.get("/api/users/last_name_start_m", async (req, res) => {
//   try {
//     let query = {
//       lname: { $regex: "^M" },
//       quote: { $gt: 15 },
//       email: { $regex: ".*M.*$" },
//     };
//     const results = await users.find(query);
//     res.status(200).json(results);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.get("/api/users/bmw_mercedes_audi_email_no_digit", async (req, res) => {
  try {
    let query = {
      car: { $in: ["BMW", "Mercedes-Benz", "Audi"] },
      email: { $not: { $regex: "\\d" } },
    };
    const results = await users.find(query);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// with async/await
// app.get("/api/top_cities", async (req, res) => {
//   try {
//     const results = await users.aggregate([
//       {
//         $group: {
//           _id: "$city",
//           users_count: { $sum: 1 },
//           avg_income: { $avg: "$income" },
//         },
//       },
//       { $sort: { users_count: -1 } },
//       { $limit: 10 },
//     ]);
//     res.status(200).json(results);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// with callback
// app.get("/api/top_cities", (req, res) => {
//   users.aggregate(
//     [
//       {
//         $group: {
//           _id: "$city",
//           users_count: { $sum: 1 },
//           avg_income: { $avg: "$income" },
//         },
//       },
//       { $sort: { users_count: -1 } },
//       { $limit: 10 },
//     ],
//     (error, result) => {
//       if (error) {
//         console.log(error);
//         res.status(500).send("Internal Server Error");
//       } else {
//         res.status(200).json(result);
//       }
//     }
//   );
// });

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
