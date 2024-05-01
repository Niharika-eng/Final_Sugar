

const mongoose = require("mongoose");
const initData = require("./data.js");
const { Info } = require("../models/info.js"); // Ensure correct import path

const MONGO_URL = "mongodb://127.0.0.1:27017/MenuData";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB");

  try {
    await initDB();
    console.log("Data initialized successfully");
  } catch (error) {
    console.error("Error initializing data:", error);
  }
}

async function initDB() {
  await Info.insertMany(initData.data);
  console.log("Data was initialized");
}

main();
