import express from "express";
import {
  createChat,
  findUserChats,
  findChat,
} from "../Controllers/chatController.js";

//mini app ,small version of express
const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findUserChats);
router.get("/find/:firstId/:secondId", findChat);

export default router;
