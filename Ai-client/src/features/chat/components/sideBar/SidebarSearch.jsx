import React from "react";

const SidebarSearch = () => {
  return (
    <div className="mt-3">
      <div
        className=" 
          flex items-center gap-2
          rounded-xl
          border border-white/50
          bg-white/35
          px-3 py-2.5
          backdrop-blur-xl
          transition
          focus-within:border-white/80
          focus-within:bg-white/55
          focus-within:shadow-sm
        "
      >
        <span className="text-sm text-slate-400">⌕</span>

        <input
          type="text"
          placeholder="Search chats..."
          className="
            min-w-0 flex-1
            bg-transparent
            text-sm text-slate-700
            outline-none
            placeholder:text-slate-400
          "
        />

        <kbd
          className="
            hidden rounded-md
            border border-white/60
            bg-white/40
            px-1.5 py-0.5
            text-[10px]
            text-slate-400
            sm:block
          "
        >
          ⌘ K
        </kbd>
      </div>
    </div>
  );
};

export default SidebarSearch;
