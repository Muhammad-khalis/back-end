
// src/index.js
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";       // ✅ import instead of require
import connectDB from "./db/db.js"; // your custom DB connection file

// Load environment variables
dotenv.config({ path: "./.env" }); 

// Connect to MongoDB
connectDB();


