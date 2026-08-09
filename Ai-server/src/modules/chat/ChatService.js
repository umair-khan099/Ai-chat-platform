import { ChatRepository } from "../../repositories/chat/ChatRepository.js";

export class ChatService {
  constructor() {
    this.chatRepository = new ChatRepository();
  }

  async createChat(title) {
    return this.chatRepository.create({ title });
  }

  async getOrCreateChat(chatId, title) {
    if (chatId) {
      const chat = await this.chatRepository.findById(chatId);

      if (!chat) {
        throw new Error("Chat not found");
      }

      return chat;
    }

    return this.createChat(title);
  }
}