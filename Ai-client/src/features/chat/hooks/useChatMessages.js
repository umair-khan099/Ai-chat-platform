import { useQuery } from "@tanstack/react-query";
import { getChatMessage } from "../api/chat.api";

export const useChatMessages = (chatId) => {
  return useQuery({
    queryKey: ["chat-messages", chatId],
    queryFn:  () => getChatMessage(chatId),
    enabled: Boolean(chatId),
  });
};
