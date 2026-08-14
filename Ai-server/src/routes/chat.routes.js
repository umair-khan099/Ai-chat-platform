import express from "express";

import { ChatController } from "../modules/chat/ChatController.js";
import { ChatService } from "../modules/chat/ChatService.js";

const router = express.Router();

const chatService = new ChatService();
const chatController = new ChatController(chatService);

router.get("/chats", chatController.getChats);

export default router;
