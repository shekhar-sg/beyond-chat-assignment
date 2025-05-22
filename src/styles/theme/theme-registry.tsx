"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import materialTheme from "@/styles/theme/index";
import type { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeRegistryProps {
  children: ReactNode;
}

const ThemeRegistry = (props: ThemeRegistryProps) => {
  const { children } = props;
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeRegistry;
