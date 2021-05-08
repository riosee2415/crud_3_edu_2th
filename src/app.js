import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import path from "path";
import boardRouter from "./routers/boardRouter";
import connect from "../db";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

connect();
app.use(helmet());
app.use(morgan(`dev`));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", boardRouter);

app.listen(PORT, () => {
  console.log(`${PORT} 배고파요😭`);
});
