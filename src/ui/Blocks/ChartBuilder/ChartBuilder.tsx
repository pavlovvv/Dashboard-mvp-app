import "./ChartBuilder.css";
import {useChartData} from "blocks/hooks/useChartData";
import {LineChartBlock} from "blocks/LineChartBlock/LineChartBlock";
import {BarChartBlock} from "blocks/BarChartBlock/BarChartBlock";
import {chartConfigs} from "blocks/constants.ts";
import {BlockType} from "blocks/types.ts";

interface ChartBuilderProps {
  chartId: string;
}

export const ChartBuilder = ({ chartId }: ChartBuilderProps) => {
  const config = chartConfigs[chartId];
  const { data, isLoading, error } = useChartData(config);

  if (!config) {
    return (
      <div className="chart-builder__fallback chart-builder__fallback--unknown">
        Unknown chart: {chartId}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="chart-builder__fallback chart-builder__fallback--loading">
        Loading chart…
      </div>
    );
  }

  if (error) {
    return (
      <div className="chart-builder__fallback chart-builder__fallback--error">
        {error}
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="chart-builder__fallback">No data available for this chart.</div>
    );
  }

  if (config.kind === BlockType.LINE) {
    return (
      <div className="chart-builder">
        <div className="chart-builder__inner">
          <LineChartBlock lineData={data} appearance={config.appearance} />
        </div>
      </div>
    );
  }

  if (config.kind === BlockType.BAR) {
    return (
      <div className="chart-builder">
        <div className="chart-builder__inner">
          <BarChartBlock barData={data} appearance={config.appearance} />
        </div>
      </div>
    );
  }

  return (
    <div className="chart-builder__fallback chart-builder__fallback--unknown">
      Unsupported chart kind: {config.kind}
    </div>
  );
};
