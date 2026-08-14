import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageComposer from "./MessageComposer";
import { useNavigate } from "react-router-dom";
import { useSendMessage } from "../../hooks/useSendMessage";

const ChatWindow = ({
  onOpenSidebar,
  isSidebarOpen,
  chatId,
  messages,
  isLoading,
  isError,  
}) => {
  const navigate = useNavigate();
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
