import { useState } from "react";

const MessageComposer = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content.trim()) return;

    console.log("Message:", content);

    setContent("");
  };

  return (
    <div className="shrink-0 px-6 pb-6 pt-3">
      <form
        onSubmit={handleSubmit}
        className="
          mx-auto w-full max-w-4xl
          overflow-hidden
          rounded-2xl
          border border-white/60
          bg-white/45
          shadow-[0_12px_40px_rgba(80,90,120,0.08)]
          backdrop-blur-2xl
        "
      >
        {/* Input */}
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Ask anything..."
          rows={1}
          className="
            min-h-14 w-full
            resize-none
            bg-transparent
            px-4 pt-4
            text-sm
            leading-6
            text-slate-700
            outline-none
            placeholder:text-slate-400
          "
        />

        {/* Composer Actions */}
        <div className="flex items-center justify-between px-3 pb-3">
          {/* Left actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="
                flex size-8 items-center justify-center
                rounded-lg
                text-slate-400
                transition
                hover:bg-white/60
                hover:text-slate-700
              "
              aria-label="Attach file"
            >
              +
            </button>

            <div
              className="
                rounded-lg
                border border-white/50
                bg-white/35
                px-2.5 py-1.5
                text-[11px]
                font-medium
                text-slate-500
              "
            >
              Mistral
            </div>
          </div>

          {/* Send */}
          <button
            type="submit"
            disabled={!content.trim()}
            className="
              flex size-9 items-center justify-center
              rounded-xl
              bg-slate-900
              text-sm text-white
              shadow-sm
              transition-all
              hover:bg-slate-800
              active:scale-95
              disabled:cursor-not-allowed
              disabled:bg-slate-200
              disabled:text-slate-400
            "
            aria-label="Send message"
          >
            ↑
          </button>
        </div>
      </form>

      <p className="mt-2 text-center text-[10px] text-slate-400">
        AI can make mistakes. Verify important information.
      </p>
    </div>
  );
};

export default MessageComposer;
    