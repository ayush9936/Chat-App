import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connect_TO_mdb from "./db/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;


//this middleware access the json data from req body
app.use(express.json());

app.use(cookieParser());

//this is middleware for routing
app.use("/api/auth", authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/user",userRoutes);



app.get("/", (req, res) => {
  res.send("hiiii");
});



//start the server and connect database
app.listen(PORT, () => {
  connect_TO_mdb();
  console.log(`Server is run at ${PORT}`);
});
