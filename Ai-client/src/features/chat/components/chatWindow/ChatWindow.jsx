import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageComposer from "./MessageComposer";
import { useNavigate, useParams } from "react-router-dom";
import { useSendMessage } from "../../hooks/useSendMessage";
import { useChatMessages } from "../../hooks/useChatMessages";

const ChatWindow = ({ onOpenSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();
  const { chatId } = useParams();

  const { data: messages = [], isLoading, isError } = useChatMessages(chatId);

  const sendMessageMutation = useSendMessage();

  const handleSendMessage = async (content) => {
    try {
      const result = await sendMessageMutation.mutateAsync({
        chatId,
        content,
      });

      // New chat
      if (!chatId && result.chat?.id) {
        navigate(`/playground/${result.chat.id}`);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <section className="flex h-full min-w-0 flex-1 flex-col">
      <ChatHeader onOpenSidebar={onOpenSidebar} isSidebarOpen={isSidebarOpen} />

      <MessageList
        messages={messages}
        isLoading={isLoading}
        isError={isError}
      />

      <MessageComposer
        onSend={handleSendMessage}
        isLoading={sendMessageMutation.isPending}
      />
    </section>
  );
};

export default ChatWindow;
