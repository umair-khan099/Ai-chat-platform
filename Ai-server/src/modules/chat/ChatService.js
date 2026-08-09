import { MessageRepository } from "../../repositories/message/MessageRepository.js";
import { AIService } from "../ai/providers/mistral/MistralProvider.js";
import { mapToLangChainMessages } from "../MessageMapper.js";
import { HumanMessage } from "@langchain/core/messages";

export class ChatService {
  constructor() {
    this.messageRepository = new MessageRepository();
    this.aiService = new AIService();
  }

  async generateResponse(chatId, userContent) {
    // 1. Existing conversation history
    const history = await this.messageRepository.findByChatId(chatId);

    // 2. Convert DB messages to LangChain messages
    const messages = mapToLangChainMessages(history);

    messages.push(new HumanMessage(userContent));
    // 4. Send complete conversation to AI
    const response = await this.aiService.generate(messages);
  }
}
