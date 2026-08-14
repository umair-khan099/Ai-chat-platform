import "dotenv/config";
import { webSearchTool } from "./modules/ai/tools/webSearchTool.js";

const main = async () => {
  const result = await webSearchTool.invoke({
    query: "latest news about OpenAI",
  });

  console.dir(result, { depth: null });
};

main();