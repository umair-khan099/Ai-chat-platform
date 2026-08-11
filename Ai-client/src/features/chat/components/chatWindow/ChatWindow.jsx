import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageComposer from "./MessageComposer";

const ChatWindow = ({ onOpenSidebar, isSidebarOpen }) => {
  return (
    <section className="flex h-full min-w-0 flex-1 flex-col">
      <ChatHeader onOpenSidebar={onOpenSidebar} isSidebarOpen={isSidebarOpen} />

      <MessageList />

      <MessageComposer />
    </section>
  );
};

export default ChatWindow;
