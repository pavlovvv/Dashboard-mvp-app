import "./App.css";
import { ErrorBoundary } from "ui/core/ErrorBoundary.tsx";
import { DashboardToolbar } from "dashboard/DashboardToolbar/DashboardToolbar.tsx";
import { lazy, Suspense } from "react";
import { DashboardProvider } from "dashboard/DashboardProvider/DashboardProvider";

const DashboardGrid = lazy(() => import("dashboard/DashboardGrid/DashboardGrid.tsx"));

const App = () => {
  return (
    <ErrorBoundary>
      <DashboardProvider>
        <div className="app">
          <div className="dashboard">
            <header className="dashboard__header">
              <div className="dashboard__header-main">
                <h1 className="dashboard__title">Dashboard test task</h1>
              </div>
            </header>

            <DashboardToolbar />
            <Suspense fallback={null}>
              <DashboardGrid />
            </Suspense>
          </div>
        </div>
      </DashboardProvider>
    </ErrorBoundary>
  );
};

export default App;
