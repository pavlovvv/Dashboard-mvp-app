import { createAddBlockHandler } from "dashboard/utils/createAddBlockHandler.ts";
import { useDashboard } from "dashboard/hooks/useDashboard.ts";
import "./DashboardToolbar.css";

export const DashboardToolbar = () => {
  const { addBlock } = useDashboard();

  return (
    <div className="dashboard__toolbar">
      <button
        className="dashboard__button"
        type="button"
        onClick={createAddBlockHandler(addBlock, "line")}
      >
        Add line chart
      </button>

      <button
        className="dashboard__button"
        type="button"
        onClick={createAddBlockHandler(addBlock, "bar")}
      >
        Add bar chart
      </button>

      <button
        className="dashboard__button"
        type="button"
        onClick={createAddBlockHandler(addBlock, "text")}
      >
        Add text block
      </button>
    </div>
  );
};
