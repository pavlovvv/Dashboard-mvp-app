import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./BarChartBlock.css";
import type { BarChartPoint, ChartConfig } from "blocks/types.ts";

interface BarChartBlockProps {
  barData: BarChartPoint[];
  appearance: ChartConfig["appearance"];
}

export const BarChartBlock = ({ barData, appearance }: BarChartBlockProps) => {
  const {
    axisColor,
    gridColor,
    fontSize,
    strokeDasharray,
    margin,
    color,
    barRadius,
    showGrid = true,
  } = appearance;

  return (
    <div className="block__chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData} margin={margin}>
          {showGrid && (
            <CartesianGrid strokeDasharray={strokeDasharray} stroke={gridColor} />
          )}

          <XAxis dataKey="name" stroke={axisColor} tick={{ fontSize }} />
          <YAxis stroke={axisColor} tick={{ fontSize }} />

          <Tooltip />

          <Bar dataKey="value" fill={color} radius={barRadius} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
