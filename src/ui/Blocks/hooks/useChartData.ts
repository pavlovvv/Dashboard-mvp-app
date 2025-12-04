import {useEffect, useState} from "react";
import {type ChartConfig, type ChartPoint, DataSourceType, type UseChartDataResult} from "blocks/types.ts";

export const useChartData = (config: ChartConfig): UseChartDataResult => {
  const [data, setData] = useState<ChartPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const load = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (config.dataSource.type === DataSourceType.STATIC) {
          const raw = config.dataSource.staticData ?? [];
          if (!isCancelled) {
            setData(raw as ChartPoint[]);
          }
        } else if (config.dataSource.type === DataSourceType.API && config.dataSource.url) {
          const res = await fetch(config.dataSource.url);
          const json = await res.json();
          if (!isCancelled) {
            setData(json as ChartPoint[]);
          }
        }
      } catch {
        if (!isCancelled) {
          setError("Failed to load chart data");
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    load();

    return () => {
      isCancelled = true;
    };
  }, [config]);

  return { data, isLoading, error };
};
