import { useState, type DragEvent } from "react";
import classNames from "classnames";
import type { Cell } from "dashboard/types.ts";
import { useDashboard } from "dashboard/hooks/useDashboard.ts";
import BlockCard from "blocks/BlockCard/BlockCard.tsx";
import "./DashboardCell.css";

interface DashboardCellProps {
  index: number;
  block: Cell;
}

export const DashboardCell = ({ index, block }: DashboardCellProps) => {
  const { moveBlock } = useDashboard();
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    if (!block?.id) {
      event.preventDefault();
      setIsDragOver(true);
    }
  };

  const handleDragLeave = () => {
    if (!block?.id) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    const fromIndexStr = event.dataTransfer.getData("text/plain");
    const fromIndex = Number(fromIndexStr);
    moveBlock(fromIndex, index);
  };

  return (
    <div
      className={classNames("dashboard__cell", {
        "dashboard__cell--empty": !block?.id,
        "dashboard__cell--drag-over": isDragOver,
      })}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {block ? (
        <BlockCard type={block.type} chartId={block.chartId} index={index} />
      ) : (
        <div className="dashboard__placeholder">Drop here</div>
      )}
    </div>
  );
};
