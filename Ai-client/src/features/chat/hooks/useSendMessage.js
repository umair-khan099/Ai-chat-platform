import { useMutation, useQueryClient } from "@tanstack/react-query";

import { sendMessage } from "../api/chat.api";

export const useSendMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendMessage,

    onSuccess: (result) => {
      const chatId = result.chat?.id;

      if (!chatId) return;

      queryClient.setQueryData(
        ["chat-messages", chatId],
        (oldMessages = []) => {
          return [...oldMessages, result.userMessage, result.assistantMessage];
        },
      );

      // Sidebar recent chats refresh
      queryClient.invalidateQueries({
        queryKey: ["chats"],
      });
    },
  });
};
