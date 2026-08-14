import "dotenv/config";

import { AIService } from "./modules/ai/providers/mistral/MistralProvider.js";
import { HumanMessage } from "@langchain/core/messages";

const aiService = new AIService();

const run = async () => {
  const response = await aiService.generate([
    new HumanMessage("Explain closures in JavaScript."),
  ]);

  console.log(response);
};

run();
