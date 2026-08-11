import React from "react";

const recentChats = [
  {
    id: "1",
    title: "Understanding LangChain Memory",
  },
  {
    id: "2",
    title: "PostgreSQL Database Design",
  },
  {
    id: "3",
    title: "How LLMs Actually Work",
  },
  {
    id: "4",
    title: "MERN System Architecture",
  },
  {
    id: "5",
    title: "Building an AI Chat Application",
  },
  {
    id: "6",
    title: "Prompt Engineering Basics",
  },
  {
    id: "5",
    title: "Building an AI Chat Application",
  },
  {
    id: "6",
    title: "Prompt Engineering Basics",
  },
  {
    id: "5",
    title: "Building an AI Chat Application",
  },
  {
    id: "6",
    title: "Prompt Engineering Basics",
  },
  {
    id: "5",
    title: "Building an AI Chat Application",
  },
  {
    id: "6",
    title: "Prompt Engineering Basics",
  },
  {
    id: "5",
    title: "Building an AI Chat Application",
  },
  {
    id: "6",
    title: "Prompt Engineering Basics",
  },
  {
    id: "5",
    title: "Building an AI Chat Application",
  },
  {
    id: "6",
    title: "Prompt Engineering Basics",
  },
  {
    id: "5",
    title: "Building an AI Chat Application",
  },
  {
    id: "6",
    title: "Prompt Engineering Basics",
  },
  {
    id: "5",
    title: "Building an AI Chat Application",
  },
  {
    id: "6",
    title: "Prompt Engineering Basics",
  },
  {
    id: "5",
    title: "Building an AI Chat Application",
  },
  {
    id: "6",
    title: "Prompt Engineering Basics",
  },
];

const RecentChats = () => {
  return (
    <section className="mt-5">
      <h2 className="px-3 text-[11px] font-medium uppercase tracking-wider text-slate-400">
        Recent
      </h2>

      <div className="mt-2 space-y-0.5">
        {recentChats.map((chat) => (
          <button
            key={chat.id}
            type="button"
            className="
              group flex w-full items-center
              rounded-lg
              px-3 py-2
              text-left
              text-sm text-slate-600
              transition-all duration-150
              hover:bg-white/50
              hover:text-slate-900
            "
          >
            <span className="min-w-0 flex-1 truncate">{chat.title}</span>

            <span
              className="
                ml-2 hidden
                text-slate-400
                group-hover:block
              "
            >
              ···
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default RecentChats;
