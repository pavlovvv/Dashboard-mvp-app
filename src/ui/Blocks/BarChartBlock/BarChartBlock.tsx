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
import type { BarChartPoint } from "blocks/types.ts";
import {
  chartColors,
  chartGrid,
  chartFontConfiguration,
  defaultBarChartMargin,
  defaultBarRadius,
} from "blocks/constants.ts";

interface BarChartBlockProps {
  barData: BarChartPoint[];
  color?: string;
  showGrid?: boolean;
}

export const BarChartBlock = ({
  barData,
  color = chartColors.barPrimary,
  showGrid = true,
}: BarChartBlockProps) => {
  return (
    <div className="block__chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData} margin={defaultBarChartMargin}>
          {showGrid && (
            <CartesianGrid
              strokeDasharray={chartGrid.strokeDasharray}
              stroke={chartColors.grid}
            />
          )}

          <XAxis dataKey="name" stroke={chartColors.axis} tick={chartFontConfiguration} />
          <YAxis stroke={chartColors.axis} tick={chartFontConfiguration} />

          <Tooltip />

          <Bar dataKey="value" fill={color} radius={defaultBarRadius} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
