// all global packages
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import { prisma } from "./database/index.js";
// import { AIService } from "./modules/ai/providers/mistral/MistralProvider.js";
import { ChatService } from "./modules/chat/ChatService.js";

// expres app
const app = express();

// all global middlewares
app.use(helmet());

app.use(cors());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// const aiService = new AIService();
const chatService = new ChatService();

app.post("/test/ai", async (req, res) => {
  try {
    const { chatId, userContent } = req.body;

    const response = await chatService.generateResponse(chatId, userContent);

    console.log("🤖 AI:", response);

    res.json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "AI request failed",
    });
  }
});
// app.use()

export default app;
