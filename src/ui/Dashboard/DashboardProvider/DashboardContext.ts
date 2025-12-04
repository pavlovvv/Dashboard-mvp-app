import { createContext } from "react";
import type { DashboardContextValue } from "dashboard/types";

export const DashboardContext = createContext<DashboardContextValue | undefined>(
  undefined,
);
