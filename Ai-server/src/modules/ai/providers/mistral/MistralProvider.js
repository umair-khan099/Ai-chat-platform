import { ChatMistralAI } from "@langchain/mistralai";
import { createAgent } from "langchain";
import { webSearchTool } from "../../tools/webSearchTool.js";

export class AIService {
  constructor() {
    const model = new ChatMistralAI({
      apiKey: process.env.MISTRAL_API_KEY,
      model: "mistral-small-latest",
    });

    this.agent = createAgent({
      model,
      tools: [webSearchTool],

      systemPrompt: `
You are a helpful AI assistant.

You have access to a web search tool.

Use web search ONLY when it is genuinely necessary, such as:
- current or recent information
- information that changes over time
- latest news, events, prices, releases, rankings, etc.
- information the user explicitly asks you to search for
- information that requires external verification

Do NOT use web search for stable general knowledge that you can answer reliably from your own knowledge.

When web search is unnecessary, answer directly.

When you use web search, use the results to produce a clear, accurate and useful final answer.
Do not expose internal tool calls or implementation details to the user.
      `,
    });
  }

  async generate(messages) {
    const result = await this.agent.invoke({
      messages,
    });

    const lastMessage = result.messages[result.messages.length - 1];

    if (typeof lastMessage.content === "string") {
      return lastMessage.content;
    }

    if (Array.isArray(lastMessage.content)) {
      return lastMessage.content
        .filter((block) => block.type === "text")
        .map((block) => block.text)
        .join("");
    }

    return String(lastMessage.content);
  }
}
