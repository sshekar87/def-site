import { currentCycle, currentCycleStatus } from "@/content/cycles";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <a
            href={currentCycle.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-pill"
          >
            {currentCycleStatus.pillLabel}
          </a>
          <span>{currentCycleStatus.message}</span>
        </div>
      </div>
    </div>
  );
}
