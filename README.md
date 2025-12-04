# Dashboard mvp app

An interactive dashboard builder featuring drag-and-drop blocks (text, line chart, bar chart).  
Each block has a fixed 1*1 size, supports movement animations and safe fallback mechanisms.

## 🌐 Deployment

The project is deployed on Vercel and available at:

👉 https://dashboard-mvp-app.vercel.app

## Features

- **Drag & drop** 
- **Dashboard context & state logic**
- **Recharts integration and configuration** 
- **Lazy loading**
- **Error boundary**

## Installation

```
npm install
npm run dev
```

## Project Structure

```
src/
 ├─ ui/
 │   ├─ Blocks/        // Text, LineChart, BarChart
 │   ├─ Dashboard/     // Grid, Cell, Toolbar
 │   │  ├─ DashboardProvider/ // Context & state logic
 │   │  ├─ utils/
 │   │  ├─ hooks/
 │   └─ core/          // Core components
 └─ main.tsx // entry point
```

## Chart configuration

All appearance and styling parameters (colors, ticks, margins, grids, line width) are declared in:

```
blocks/constants.ts
```

## 📄 License

MIT - free to use and modify.
