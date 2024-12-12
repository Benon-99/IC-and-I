import express from "express";
import { getAllMessages } from "../controllers/mesasgesController.js";

const messageRouter = express.Router();

messageRouter.get("/messages", getAllMessages);

export default messageRouter;
