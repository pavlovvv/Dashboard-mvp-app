import { useContext } from "react";
import type { DashboardContextValue } from "dashboard/types.ts";
import {DashboardContext} from  "dashboard/DashboardProvider/DashboardContext.ts";

export const useDashboard = (): DashboardContextValue => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return context;
};
