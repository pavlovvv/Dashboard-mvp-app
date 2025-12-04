import { useDashboard } from "dashboard/hooks/useDashboard.ts";
import { DashboardCell } from "dashboard/DashboardCell/DashboardCell.tsx";
import "./DashboardGrid.css";

const DashboardGrid = () => {
  const { cells } = useDashboard();

  return (
    <div className="dashboard__grid">
      {cells.map((cell, index) => (
        <DashboardCell
          key={cell ? cell.id : `empty-${index}`}
          index={index}
          block={cell}
        />
      ))}
    </div>
  );
};

export default DashboardGrid;
