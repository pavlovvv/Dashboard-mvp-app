import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./LineChartBlock.css";
import type { LineChartPoint, ChartConfig } from "blocks/types.ts";

interface LineChartBlockProps {
  lineData: LineChartPoint[];
  appearance: ChartConfig["appearance"];
}

export const LineChartBlock = ({ lineData, appearance }: LineChartBlockProps) => {
  const {
    axisColor,
    gridColor,
    fontSize,
    strokeDasharray,
    margin,
    color,
    lineWidth,
    showGrid = true,
    showDots = false,
  } = appearance;

  return (
    <div className="block__chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lineData} margin={margin}>
          {showGrid && (
            <CartesianGrid strokeDasharray={strokeDasharray} stroke={gridColor} />
          )}

          <XAxis dataKey="name" stroke={axisColor} tick={{ fontSize }} />
          <YAxis stroke={axisColor} tick={{ fontSize }} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={lineWidth}
            dot={showDots}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
