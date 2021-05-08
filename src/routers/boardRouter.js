import express from "express";
import {
  homeController,
  detailController,
  createController,
  editController,
  createBoardController,
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/", homeController);
boardRouter.get("/detail", detailController);

boardRouter.get("/create", createController);
boardRouter.post("/createBoard", createBoardController);

boardRouter.get("/edit", editController);

export default boardRouter;
