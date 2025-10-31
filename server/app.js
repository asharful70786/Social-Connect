import express from "express";
import cors from "cors";
import cookieParser  from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
import connectDB from "./Config/db.js";
// connectDB();

import authRoutes from "./Routes/AuthRoutes.js";


const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);


app.listen(4000, () => {
  console.log("Server running on port 4000");
});