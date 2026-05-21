import { currentCycleStatus } from "@/content/cycles";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <span className="topbar-pill">{currentCycleStatus.pillLabel}</span>
          <span>{currentCycleStatus.message}</span>
        </div>
      </div>
    </div>
  );
}
