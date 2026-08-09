import {
  HumanMessage,
  AIMessage,
  SystemMessage,
} from "@langchain/core/messages";

export function mapToLangChainMessages(messages) {
  return messages.map((message) => {
    switch (message.role) {
      case "USER":
        return new HumanMessage(message.content);

      case "ASSISTANT":
        return new AIMessage(message.content);

      case "SYSTEM":
        return new SystemMessage(message.content);

      default:
        throw new Error(`Unsupported message role: ${message.role}`);
    }
  });
}