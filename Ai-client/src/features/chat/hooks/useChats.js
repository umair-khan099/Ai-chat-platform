import { useQuery } from "@tanstack/react-query";
import { getChats } from "../api/chat.api";

export const useChats = () => {
  return useQuery({
    queryKey: ["chats"],
    queryFn: getChats,
  });
};
