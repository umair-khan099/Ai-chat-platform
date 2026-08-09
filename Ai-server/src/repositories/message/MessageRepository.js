import { BaseRepository } from "../base/BaseRepositories.js";
import { prisma } from "../../database/index.js";

export class MessageRepository extends BaseRepository {
  constructor() {
    super(prisma.message);
  }

  async findByChatId(chatId) {
    return this.model.findMany({
      where: { chatId },
      orderBy: {
        createdAt: "asc",
      },
    });
  }
}
