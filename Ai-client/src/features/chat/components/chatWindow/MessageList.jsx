import { useEffect, useRef } from "react";

const MessageList = ({ messages = [], isLoading, isError }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-sm text-slate-400">Loading conversation...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-sm text-red-400">Failed to load conversation.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "USER"
                ? "flex justify-end"
                : "flex justify-start"
            }
          >
            <div
              className={
                message.role === "USER"
                  ? "max-w-[80%] rounded-2xl bg-white/70 px-4 py-3 text-sm text-slate-700 shadow-sm"
                  : "max-w-[80%] px-1 py-2 text-sm leading-7 text-slate-700"
              }
            >
              {message.content}
            </div>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default MessageList;
