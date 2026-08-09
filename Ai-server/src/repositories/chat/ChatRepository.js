import { BaseRepository } from "../base/BaseRepository.js";
import { prisma } from "../../database/index.js";

export class ChatRepository extends BaseRepository {
  constructor() {
    super(prisma.chat);
  }
}