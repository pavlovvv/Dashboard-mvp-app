import type { Cell } from "dashboard/types.ts";

const isIndexInRange = (cells: Cell[], index: number): boolean =>
  index >= 0 && index < cells.length;

export const isCanDeleteCell = (cells: Cell[], index: number): boolean =>
  isIndexInRange(cells, index) && cells[index] !== null;

export const isCanMoveBlock = (
  cells: Cell[],
  fromIndex: number,
  toIndex: number,
): boolean => {
  if (fromIndex === toIndex) return false;
  if (!isIndexInRange(cells, fromIndex)) return false;
  if (!isIndexInRange(cells, toIndex)) return false;

  const fromCell = cells[fromIndex];
  const toCell = cells[toIndex];

  return fromCell !== null && toCell === null;
};
