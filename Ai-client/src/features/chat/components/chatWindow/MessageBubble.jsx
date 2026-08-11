const MessageBubble = ({ role, content }) => {
  const isUser = role === "USER";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[75%]
          rounded-2xl
          px-4 py-3
          text-sm
          leading-6
          ${
            isUser
              ? "bg-slate-900 text-white"
              : "border border-white/60 bg-white/45 text-slate-700 backdrop-blur-xl"
          }
        `}
      >
        {content}
      </div>
    </div>
  );
};

export default MessageBubble;
