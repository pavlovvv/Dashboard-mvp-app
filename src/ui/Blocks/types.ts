export interface BarChartPoint {
  name: string;
  value: number;
}

export interface LineChartPoint {
  name: string;
  value: number;
}

export const enum DataSourceType {
  STATIC = "static",
  API = "api",
}

export const enum BlockType {
  LINE = "line",
  BAR = "bar",
  TEXT = "text",
}

export interface ChartPoint {
  name: string;
  value: number;
}

export interface UseChartDataResult {
  data: ChartPoint[];
  isLoading: boolean;
  error: string | null;
}

export type ChartDataPoint = LineChartPoint | BarChartPoint;

export type ChartDataSource = {
  type: DataSourceType;
  staticData: ChartDataPoint[];
  url?: string;
};

export interface ChartAppearance {
  color: string;
  showGrid: boolean;
  showDots?: boolean;
  axisColor: string;
  gridColor: string;
  fontSize: number;
  strokeDasharray: string;
  margin: { top: number; right: number; left: number; bottom: number };
  barRadius?: [number, number, number, number];
  lineWidth?: number;
}

export interface ChartConfig {
  id: string;
  kind: BlockType;
  dataSource: ChartDataSource;
  appearance: ChartAppearance;
}
