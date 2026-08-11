import React from "react";

const NewChatButton = () => {
  return (
    <button
      type="button"
      className="
        mt-4 flex w-full items-center gap-2
        rounded-xl
        border border-white/50
        bg-white/45
        px-3 py-2.5
        text-sm font-medium
        text-slate-700
        shadow-sm
        backdrop-blur-xl
        transition-all duration-200
        hover:bg-white/65
        hover:shadow-md
        active:scale-[0.98]
      "
    >
      <span
        className="
          flex size-6 items-center justify-center
          rounded-lg
          bg-slate-900
          text-sm text-white
        "
      >
        +
      </span>

      <span>New Chat</span>
    </button>
  );
};

export default NewChatButton;
