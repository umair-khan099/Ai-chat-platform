import { useState } from "react";
import Sidebar from "../features/chat/components/sideBar/Sidebar";
import ChatWindow from "../features/chat/components/chatWindow/ChatWindow";
import { useChatMessages } from "../features/chat/hooks/useChatMessages";
import { useParams } from "react-router-dom";

const PlayGroundLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { chatId } = useParams();
  // console.log(chatId);
  const { data: messages = [], isLoading, isError } = useChatMessages(chatId);

  return (
    <main className="h-dvh w-full overflow-hidden bg-slate-50">
      <div className="relative flex h-full w-full">
        {/* // Mobile Overlay */}
        {isSidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setIsSidebarOpen(false)}
            className="
              fixed inset-0 z-30
              bg-slate-900/10a
              backdrop-blur-[2px]
              md:hidden
            "
          />
        )}
        {/* Sidebar */}
        <aside
          className={`
            absolute inset-y-0 left-0 z-40
            h-full
            w-[85%] max-w-[360px]
            transform
            transition-transform duration-300 ease-out

            md:relative
            md:z-0
            md:max-w-none
            md:transition-[width,transform]
            md:duration-300

            ${
              isSidebarOpen
                ? "translate-x-0 md:w-[30%]"
                : "-translate-x-full md:w-0 md:translate-x-0"
            }
          `}
        >
          <div className="h-full w-full overflow-hidden">
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </div>
        </aside>
        {/* Chat */}
        <section
          className={`
            h-full min-w-0 flex-1
            transition-[width] duration-300
          `}
        >
          <ChatWindow
            onOpenSidebar={() => setIsSidebarOpen(true)}
            isSidebarOpen={isSidebarOpen}
            chatId={chatId}
            messages={messages}
            isLoading={isLoading}
            isError={isError}
          />
        </section>
      </div>
    </main>
  );
};

export default PlayGroundLayout;
