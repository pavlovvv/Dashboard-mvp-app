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
import type { LineChartPoint } from "blocks/types.ts";
import {
  chartColors,
  chartGrid,
  chartFontConfiguration,
  defaultDBMargin,
  defaultLineWidth,
} from "blocks/constants.ts";

interface LineChartBlockProps {
  lineData: LineChartPoint[];
  color?: string;
  showGrid?: boolean;
  showDots?: boolean;
}

export const LineChartBlock = ({
  lineData,
  color,
  showGrid = true,
  showDots = false,
}: LineChartBlockProps) => {
  return (
    <div className="block__chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lineData} margin={defaultDBMargin}>
          {showGrid && (
            <CartesianGrid
              strokeDasharray={chartGrid.strokeDasharray}
              stroke={chartColors.grid}
            />
          )}

          <XAxis dataKey="name" stroke={chartColors.axis} tick={chartFontConfiguration} />
          <YAxis stroke={chartColors.axis} tick={chartFontConfiguration} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={defaultLineWidth}
            dot={showDots}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
