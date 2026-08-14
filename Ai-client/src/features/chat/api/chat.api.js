import apiClient from "../../../api/client";

export const getChats = async () => {
  const response = await apiClient.get("/chats");
  return response.data.data;
};

export const getChatMessage = async (chatId) => {
  const response = await apiClient.get(`/chats/${chatId}/messages`);
  console.log(response);
  return response.data.data;
};

export const sendMessage = async ({ chatId, content }) => {
  const endPoint = chatId ? `/message/${chatId}` : "/message";

  const response = await apiClient.post(endPoint, {
    content,
  });

  return response.data.data;  
};
