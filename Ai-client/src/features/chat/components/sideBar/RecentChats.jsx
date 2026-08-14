import { useChats } from "../../hooks/useChats";
import { useNavigate } from "react-router-dom";

const RecentChats = () => {
  const { data: chats = [], isLoading, isError } = useChats();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <section className="mt-5">
        <h2 className="px-3 text-[11px] font-medium uppercase tracking-wider text-slate-400">
          Recent
        </h2>

        <div className="mt-2 px-3 text-xs text-slate-400">Loading chats...</div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mt-5">
        <h2 className="px-3 text-[11px] font-medium uppercase tracking-wider text-slate-400">
          Recent
        </h2>

        <div className="mt-2 px-3 text-xs text-red-400">
          Failed to load chats
        </div>
      </section>
    );
  }

  return (
    <section className="mt-5">
      <h2 className="px-3 text-[11px] font-medium uppercase tracking-wider text-slate-400">
        Recent
      </h2>

      <div className="mt-2 space-y-0.5">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => navigate(`/playground/${chat.id}`)}
            type="button"
            className="
              group flex w-full items-center
              rounded-lg
              px-3 py-2
              text-left text-sm
              text-slate-600
              transition-all duration-150
              hover:bg-white/50
              hover:text-slate-900
            "
          >
            <span className="min-w-0 flex-1 truncate">
              {chat.title || "New Chat"}
            </span>

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
