import React from "react";
import SidebarSearch from "./SidebarSearch";
import NewChatButton from "./NewChatButton";
import SidebarNavigation from "./SidebarNavigation";
import RecentChats from "./RecentChats";
import UserProfile from "./UserProfile";

const Sidebar = ({ onClose }) => {
  return (
    <aside className=" flex flex-col h-full w-full border-l border-white/40 bg-white/40 p-4 backdrop-blur-2xl">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-xl bg-white/70 shadow-sm">
            ✦
          </div>

          <span className="text-sm font-semibold tracking-tight text-slate-800">
            AI Chat
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close sidebar"
          className="flex size-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/60 hover:text-slate-800"
        >
          ←
        </button>
      </div>
      <SidebarSearch />
      <NewChatButton />
      <SidebarNavigation />
      <div className=" min-h-0 flex-1 overflow-y-auto">
        <RecentChats />
      </div>
      <UserProfile />
    </aside>
  );
};

export default Sidebar;
