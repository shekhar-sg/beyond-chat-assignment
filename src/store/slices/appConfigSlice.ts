import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppConfigState {
  themeMode: "light" | "dark";
  isAIChatSidebarOpen: boolean;
}

const initialState: AppConfigState = {
  themeMode: "light",
  isAIChatSidebarOpen: false,
};

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    toggleThemeMode(
      state,
      action: PayloadAction<"light" | "dark" | undefined>
    ) {
      const { payload } = action;
      state.themeMode =
        payload || state.themeMode === "light" ? "dark" : "light";
    },
    toggleAIChatSidebar(state) {
      state.isAIChatSidebarOpen = !state.isAIChatSidebarOpen;
    },
  },
});

export const { toggleThemeMode, toggleAIChatSidebar } = appConfigSlice.actions;
export default appConfigSlice;
