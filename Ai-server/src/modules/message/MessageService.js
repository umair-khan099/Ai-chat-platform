import { MessageRepository } from "../../repositories/message/MessageRepository.js";
import { AIService } from "../ai/providers/mistral/MistralProvider.js";
import { ChatService } from "../chat/ChatService.js";
import { mapToLangChainMessages } from "../MessageMapper.js";
import { HumanMessage } from "@langchain/core/messages";

export class MessageService {
  constructor() {
    this.messageRepository = new MessageRepository();
    this.aiService = new AIService();
    this.chatService = new ChatService();
  }

  async generateResponse(chatId, content) {
    // 1. Resolve existing/new chat
    const chat = await this.chatService.getOrCreateChat(chatId, content);

    const resolvedChatId = chat.id;

    // 2. Existing conversation history
    const history = await this.messageRepository.findByChatId(resolvedChatId);

    // 3. Save current user message
    const userMessage = await this.messageRepository.create({
      chatId: resolvedChatId,
      role: "USER",
      content,
      status: "COMPLETED",
    });

    // 4. Convert history
    const messages = mapToLangChainMessages(history);

    // 5. Add current message
    messages.push(new HumanMessage(content));

    // 6. AI
    const response = await this.aiService.generate(messages);

    // 7. Save AI response
    const assistantMessage = await this.messageRepository.create({
      chatId: resolvedChatId,
      role: "ASSISTANT",
      content: response,
      status: "COMPLETED",
    });

    return {
      chat,
      response,
      userMessage,
      assistantMessage,
    };
  }

  async getMessagesByChatId(chatId) {
    const chat = await this.chatService.getChatById(chatId);

    if (!chat) {
      throw new Error("Chat not found");
    }

    return this.messageRepository.findByChatId(chatId);
  }
}
