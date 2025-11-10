import express from "express";
import dotenv from "dotenv";
import { conexionMongo } from "./src/config/db.js";

const app = express();
dotenv.config();
const port = process.env.PORT;
conexionMongo();

app.get("/",(request,response)=>{
 response.send("Server works!")
});


app.listen(port, ()=>{
  console.log(`El servidor está ejecutándose en http://localhost:${port}`)
});