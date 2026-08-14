import { TavilySearch } from "@langchain/tavily";
import { tool } from "@langchain/core/tools";
import { z } from "zod";

const tavilySearch = new TavilySearch({
  maxResults: 5,
});

export const webSearchTool = tool(
  async ({ query }) => {
    return await tavilySearch.invoke({
      query,
    });
  },
  {
    name: "web_search",
    description:
      "Search the internet for current, recent, changing, or externally verifiable information. Use only when web search is genuinely necessary.",
    schema: z.object({
      query: z.string().min(1).describe("The search query to send to the web"),
    }),
  },
);
