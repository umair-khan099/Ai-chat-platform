import express from "express";
import { MessageController } from "../modules/message/MessageController.js";
import { MessageService } from "../modules/message/MessageService.js";

const router = express.Router();

const messageService = new MessageService();
const messageController = new MessageController(messageService);

router.post("/", messageController.sendMessage);

export default router;