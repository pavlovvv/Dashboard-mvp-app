import {BlockType, type ChartConfig, DataSourceType} from "blocks/types.ts";

export const blockLabels: Record<BlockType, string> = {
  [BlockType.LINE]: "Line chart",
  [BlockType.BAR]: "Bar chart",
  [BlockType.TEXT]: "Text block",
};

export const chartColors = {
  axis: "rgba(255,255,255,0.3)",
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

export const defaultLineChartMargin = {
  top: 5,
  right: 8,
  left: -10,
  bottom: 0,
};

export const defaultLineWidth = 2;

export const chartConfigs: Record<string, ChartConfig> = {
  line_demo: {
    id: "line_demo",
    kind: BlockType.LINE,
    dataSource: {
      type: DataSourceType.STATIC,
      staticData: [
        { name: "1", value: 5 },
        { name: "2", value: 7 },
        { name: "3", value: 1 },
        { name: "4", value: 3 },
        { name: "5", value: 6 },
      ],
    },
    appearance: {
      color: chartColors.barPrimary,
      showGrid: true,
      showDots: false,
      axisColor: chartColors.axis,
      gridColor: chartColors.grid,
      fontSize: chartFontConfiguration.fontSize,
      strokeDasharray: chartGrid.strokeDasharray,
      margin: defaultLineChartMargin,
      lineWidth: defaultLineWidth,
    },
  },

  bar_demo: {
    id: "bar_demo",
    kind: BlockType.BAR,
    dataSource: {
      type: DataSourceType.STATIC,
      staticData: [
        { name: "1", value: 300 },
        { name: "2", value: 500 },
        { name: "3", value: 400 },
        { name: "4", value: 650 },
        { name: "5", value: 600 },
      ],
    },
    appearance: {
      color: chartColors.barPrimary,
      showGrid: true,
      axisColor: chartColors.axis,
      gridColor: chartColors.grid,
      fontSize: chartFontConfiguration.fontSize,
      strokeDasharray: chartGrid.strokeDasharray,
      margin: defaultBarChartMargin,
      barRadius: defaultBarRadius,
    },
  },
};
