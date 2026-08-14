import { BaseRepository } from "../base/BaseRepositories.js";
import { prisma } from "../../database/index.js";

export class ChatRepository extends BaseRepository {
  constructor() {
    super(prisma.chat); 
  }

  async findAll() {
    return this.model.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
  }
}
