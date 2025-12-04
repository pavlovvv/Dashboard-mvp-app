import type { Block, BlockType } from "dashboard/types.ts";

export const createBlock = (type: BlockType): Block => ({
  id: crypto.randomUUID(),
  type,
});
