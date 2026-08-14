import { ChatRepository } from "../../repositories/chat/ChatRepository.js";

export class ChatService {
  constructor() {
    this.chatRepository = new ChatRepository();
  }

  // create new chat 
  async createChat(title) {
    return this.chatRepository.create({ title });
  }

  // core feature create chat if chat allready created just start conversesion 
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

  // get all chats of an user 
  async getChats() {
    return this.chatRepository.findAll();
  }

  // fetching chats based on there id ( give's only one)
  async getChatById(chatId) {
    return this.chatRepository.findById(chatId);
  }
}
