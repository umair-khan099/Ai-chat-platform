const ChatHeader = ({ onOpenSidebar, isSidebarOpen }) => {
  return (
    <header
      className="
        flex h-16 shrink-0 items-center justify-between
        border-b border-white/50
        bg-white/30
        px-4 sm:px-6
        backdrop-blur-xl
      "
    >
      <div className="flex min-w-0 items-center gap-3">
        {/* Sidebar Open */}
        {!isSidebarOpen && (
          <button
            type="button"
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
            className="
      flex size-8 shrink-0 items-center justify-center
      rounded-lg
      text-slate-400
      transition
      hover:bg-white/60
      hover:text-slate-800
    "
          >
            →
          </button>
        )}

        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold text-slate-800">
            New Chat
          </h1>

          <p className="mt-0.5 text-[11px] text-slate-400">
            Private conversation
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          className="
            rounded-lg px-3 py-1.5
            text-xs font-medium
            text-slate-500
            transition
            hover:bg-white/60
            hover:text-slate-800
          "
        >
          Private
        </button>

        <button
          type="button"
          className="
            flex size-8 items-center justify-center
            rounded-lg
            text-slate-400
            transition
            hover:bg-white/60
            hover:text-slate-800
          "
        >
          ⋯
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
