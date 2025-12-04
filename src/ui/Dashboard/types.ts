export type BlockType = "line" | "bar" | "text";

export interface Block {
  id: string;
  type: BlockType;
}

export type Cell = Block | null;

export interface DashboardContextValue {
  cells: Cell[];
  addBlock: (type: BlockType) => void;
  deleteBlock: (index: number) => void;
  moveBlock: (fromIndex: number, toIndex: number) => void;
}
