import React from 'react'

const SidebarNavigation = () => {
  return (
    <nav className="mt-4 border-y border-white/40 py-3">
      <div className="space-y-1">
        <button
          type="button"
          className="
            flex w-full items-center gap-3
            rounded-lg
            px-3 py-2
            text-sm text-slate-600
            transition
            hover:bg-white/50
            hover:text-slate-900
          "
        >
          <span className="text-base text-slate-400">
            ◫
          </span>

          <span>Projects</span>
        </button>

        <button
          type="button"
          className="
            flex w-full items-center gap-3
            rounded-lg
            px-3 py-2
            text-sm text-slate-600
            transition
            hover:bg-white/50
            hover:text-slate-900
          "
        >
          <span className="text-base text-slate-400">
            ◎
          </span>

          <span>Groups</span>
        </button>
      </div>
    </nav>
  );
};

export default SidebarNavigation;


