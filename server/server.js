import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors()) // Enable Cross-Origin Resource Sharing

// 1st Route ( Main Route )
app.get('/', (req, res)=> res.send("API is working"))

// Port for running
const PORT = process.env.PORT || 3000;

// Starting backend server
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));