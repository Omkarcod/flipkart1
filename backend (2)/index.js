import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./Default.js";
import Router from "./routes/Route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config();

// middlewares
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`Server is Successfully Running on PORT  no : ${PORT}`);
});
DefaultData();
