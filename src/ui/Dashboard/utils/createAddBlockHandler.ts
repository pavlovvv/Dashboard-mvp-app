import type { BlockType } from "dashboard/types.ts";

export const createAddBlockHandler =
  (addBlock: (type: BlockType) => void, type: BlockType) => () =>
    addBlock(type);
