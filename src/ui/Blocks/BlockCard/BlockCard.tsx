import {type DragEvent, memo, type MouseEvent} from "react";
import "./BlockCard.css";
import {TextBlock} from "blocks/TextBlock/TextBlock.tsx";
import {useDashboard} from "blocks/imports.ts";
import {ChartBuilder} from "blocks/ChartBuilder/ChartBuilder.tsx";
import {blockLabels} from "blocks/constants.ts";
import {BlockType} from "blocks/types.ts";
import {BlockType as TextBlockType} from "blocks/imports";

interface BlockCardProps {
  index: number;
  type: TextBlockType;
  chartId?: string;
}

const BlockCard = ({ type, index, chartId }: BlockCardProps) => {
  const { deleteBlock } = useDashboard();

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(index));
  };

  const handleDeleteClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    deleteBlock(index);
  };

  const render = () => {
    if (type === BlockType.TEXT) {
      return <TextBlock />;
    }

    if ((type === BlockType.LINE || type === BlockType.BAR) && chartId) {
      return <ChartBuilder chartId={chartId} />;
    }

    return <div className="block__fallback">No renderer configured for this block.</div>;
  };

  return (
    <div className={`block block--${type}`} draggable onDragStart={handleDragStart}>
      <div className="block__header">
        <div className="block__title">{blockLabels[type]}</div>
      </div>

      <button
        className="block__delete"
        type="button"
        aria-label="Delete block"
        onClick={handleDeleteClick}
      >
        Delete
      </button>

      <div className="block__body">{render()}</div>
    </div>
  );
};

export default memo(
  BlockCard,
  (prev, next) =>
    prev.type === next.type && prev.index === next.index && prev.chartId === next.chartId,
);
