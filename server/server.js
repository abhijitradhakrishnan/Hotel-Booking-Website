import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";

connectDB()

const app = express();
app.use(cors()) // Enable Cross-Origin Resource Sharing

// Middleware 
app.use(express.json())
app.use(clerkMiddleware())

// API to listen Clerk Webhooks 
app.use("/api/clerk", clerkWebhooks)

// 1st Route ( Main Route )
app.get('/', (req, res)=> res.send("API is working"))

// Port for running
const PORT = process.env.PORT || 3000;

// Starting backend server
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));