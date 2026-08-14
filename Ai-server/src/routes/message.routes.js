import express from "express";
import { MessageController } from "../modules/message/MessageController.js";
import { MessageService } from "../modules/message/MessageService.js";

const router = express.Router();

const messageService = new MessageService();
const messageController = new MessageController(messageService);

// router.post("/message/:chat", messageController.sendMessage);
router.post("/message", messageController.sendMessage);
router.post("/message/:chatId", messageController.sendMessage);
router.get("/chats/:chatId/messages", messageController.getMessagesByChatId);

export default router;
