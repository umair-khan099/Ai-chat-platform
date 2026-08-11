const UserProfile = () => {
  return (
    <button
      type="button"
      className="
        mt-auto flex w-full items-center gap-3
        border-t border-white/40
        px-2 pt-4
        text-left
        transition
        hover:opacity-80
      "
    >
      {/* Avatar */}
      <div
        className="
          flex size-9 shrink-0
          items-center justify-center
          overflow-hidden
          rounded-full
          border border-white/70
          bg-white/60
          text-xs font-semibold
          text-slate-600
          shadow-sm
        "
      >
        U
      </div>

      {/* User Info */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-slate-800">
          Umair Khan
        </p>

        <p className="truncate text-[11px] text-slate-400">umair@example.com</p>
      </div>

      {/* Menu */}
      <span className="text-slate-400">···</span>
    </button>
  );
};

export default UserProfile;
