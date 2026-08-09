import { mapToLangChainMessages } from "../src/modules/MessageMapper.js";

const messages = [
  {
    role: "USER",
    content: "Mera naam Umair hai",
  },
  {
    role: "ASSISTANT",
    content: "Nice to meet you",
  },
];

const result = mapToLangChainMessages(messages);

console.log(result);
