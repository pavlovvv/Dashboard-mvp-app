import type { Block, BlockType } from "dashboard/types.ts";

const DEFAULT_CHART_BY_TYPE: Partial<Record<BlockType, string>> = {
  line: "line_demo",
  bar: "bar_demo",
};

export const createBlock = (type: BlockType): Block => ({
  id: crypto.randomUUID(),
  type,
  chartId: DEFAULT_CHART_BY_TYPE[type],
});
