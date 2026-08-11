import MessageBubble from "./MessageBubble";

const messages = [
  {
    id: "1",
    role: "USER",
    content: "Mera naam Umair hai.",
  },
  {
    id: "2",
    role: "ASSISTANT",
    content:
      "Nice to meet you, Umair. Main tumhari AI application build karne mein help kar sakta hoon.",
  },
  {
    id: "3",
    role: "USER",
    content: "AI aur LLM mein kya difference hai?",
  },
  {
    id: "4",
    role: "ASSISTANT",
    content:
      "LLM ek AI model hota hai jo large-scale text data se language patterns learn karta hai. AI broader field hai, jabki LLM AI ka ek specific type hai.",
  },
];

const MessageList = () => {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-8">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            role={message.role}
            content={message.content}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
