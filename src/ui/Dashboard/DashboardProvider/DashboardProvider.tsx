import { type FC, type ReactNode, useState } from "react";
import type { BlockType, Cell } from "dashboard/types.ts";
import { createInitialCells } from "dashboard/utils/createInitialCells.ts";
import { createBlock } from "dashboard/utils/createBlock.ts";
import { isCanDeleteCell, isCanMoveBlock } from "dashboard/utils/overrideBlock.ts";
import { DashboardContext } from "dashboard/DashboardProvider/DashboardContext";

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [cells, setCells] = useState<Cell[]>(() => createInitialCells(2));

  const addBlock = (type: BlockType) => {
    setCells((prev) => {
      const next = [...prev];
      let targetIndex = next.findIndex((cell) => cell === null);

      if (targetIndex === -1) {
        const startIndex = next.length;
        next.push(...createInitialCells(1));
        targetIndex = startIndex;
      }

      next[targetIndex] = createBlock(type);

      return next;
    });
  };

  const deleteBlock = (index: number) => {
    setCells((prev) => {
      if (!isCanDeleteCell(prev, index)) return prev;

      const next = [...prev];
      next[index] = null;
      return next;
    });
  };

  const moveBlock = (fromIndex: number, toIndex: number) => {
    setCells((prev) => {
      if (!isCanMoveBlock(prev, fromIndex, toIndex)) {
        return prev;
      }

      const next = [...prev];
      next[toIndex] = next[fromIndex];
      next[fromIndex] = null;
      return next;
    });
  };

  return (
    <DashboardContext.Provider value={{ cells, addBlock, deleteBlock, moveBlock }}>
      {children}
    </DashboardContext.Provider>
  );
};
