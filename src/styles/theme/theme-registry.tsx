"use client";
import { useAppSelector } from "@/store/hooks";
import generateTheme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { type ReactNode, useMemo } from "react";

interface ThemeRegistryProps {
  children: ReactNode;
}

const ThemeRegistry = (props: ThemeRegistryProps) => {
  const { children } = props;
  const mode = useAppSelector((state) => state.appConfig.themeMode);

  const theme = useMemo(() => generateTheme(mode), [mode]);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeRegistry;
