import { memo, type DragEvent, type MouseEvent } from "react";
import "./BlockCard.css";
import { TextBlock } from "blocks/TextBlock/TextBlock.tsx";
import { LineChartBlock } from "blocks/LineChartBlock/LineChartBlock.tsx";
import { BarChartBlock } from "blocks/BarChartBlock/BarChartBlock.tsx";
import { barData, blockLabels, lineData } from "blocks/constants.ts";
import {type BlockType, useDashboard} from "blocks/imports.ts";

interface BlockCardProps {
  index: number;
  type: BlockType;
}

const BlockCard = ({ type, index }: BlockCardProps) => {
  const { deleteBlock } = useDashboard();

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(index));
  };

  const handleDeleteClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    deleteBlock(index);
  };

  const renderContent = () => {
    switch (type) {
      case "text":
        return <TextBlock />;
      case "line":
        return <LineChartBlock lineData={lineData} />;
      case "bar":
        return <BarChartBlock barData={barData} />;
      default:
        return null;
    }
  };

  return (
    <div className={`block block--${type}`} draggable onDragStart={handleDragStart}>
      <div className="block__header">
        <div className="block__title">{blockLabels[type]}</div>
      </div>

      <button className="block__delete" onClick={handleDeleteClick}>
        Delete
      </button>

      <div className="block__body">{renderContent()}</div>
    </div>
  );
};

export default memo(
  BlockCard,
  (prev, next) => prev.type === next.type && prev.index === next.index,
);
