// Route configuration constants - single source of truth for all routes
export const ROUTES = {
  ROOT: "/",
  DASHBOARD: "/dashboard",
  MODULE_A: {
    BASE: "/dashboard/module-a",
    HOME_1: "/dashboard/module-a/home-1",
    HOME_2: "/dashboard/module-a/home-2",
    HOME_1_TABS: {
      TAB_1: "/dashboard/module-a/home-1/tab-1",
      TAB_2: "/dashboard/module-a/home-1/tab-2",
      TAB_3: "/dashboard/module-a/home-1/tab-3",
    },
  },
  MODULE_B: {
    BASE: "/dashboard/module-b",
  },
  MODULE_C: {
    BASE: "/dashboard/module-c",
  },
} as const;

