import type { BlockType } from "dashboard/types.ts";

export const blockLabels: Record<BlockType, string> = {
  line: "Line chart",
  bar: "Bar chart",
  text: "Text block",
};

export const lineData = [
  { name: "1", value: 5 },
  { name: "2", value: 7 },
  { name: "3", value: 1 },
  { name: "4", value: 3 },
  { name: "5", value: 6 },
];

export const barData = [
  { name: "1", value: 300 },
  { name: "2", value: 500 },
  { name: "3", value: 400 },
  { name: "4", value: 650 },
  { name: "4", value: 600 },
];

export const chartColors = {
  axis: "rgba(255,255,255,0.35)",
  grid: "rgba(255,255,255,0.06)",
  barPrimary: "#4e8df5",
};

export const chartFontConfiguration = {
  fontSize: 10,
};

export const chartGrid = {
  strokeDasharray: "3 3",
};

export const defaultBarChartMargin = {
  top: 5,
  right: 8,
  left: -10,
  bottom: 0,
};

export const defaultBarRadius: [number, number, number, number] = [4, 4, 0, 0];

export const defaultDBMargin = {
  top: 5,
  right: 8,
  left: -10,
  bottom: 0,
};

export const defaultLineWidth = 2;
