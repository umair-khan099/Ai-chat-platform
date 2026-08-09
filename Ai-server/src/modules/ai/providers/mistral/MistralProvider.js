import { ChatMistralAI } from "@langchain/mistralai";

export class AIService {
  constructor() {
    this.model = new ChatMistralAI({
      apiKey: process.env.MISTRAL_API_KEY,
      model: "mistral-small-latest",
    });
  }

  async generate(message) {
    const response = await this.model.invoke(message);

    return response.content;
  }
}
