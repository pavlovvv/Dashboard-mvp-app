import type { Cell } from "dashboard/types.ts";

const GRID_COLUMNS = 3;

export const createInitialCells = (rows: number): Cell[] =>
  Array.from({ length: rows * GRID_COLUMNS }, () => null);
