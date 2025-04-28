import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import url from "./config/config";

// Load environment variables
dotenv.config();

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

mongoose.connect(url.dbUrl).then((res)=>{
  console.log(`Database connection successfully`);
}).catch((err)=>{
  console.log(`Database connection fail ${err}`)
});

import { bookRoute } from "./module/book/bookApi";

import { userRouter } from "./module/auth/userApi";

// books routes 
app.use(`/api/books`,bookRoute);
// user router 
app.use(`/api/user`,userRouter);





// Example route (optional)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Express!");
});


export default app

