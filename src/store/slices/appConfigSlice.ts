import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppConfigState {
  themeMode: "light" | "dark";
}

const initialState: AppConfigState = {
  themeMode: "light",
};

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    toggleThemeMode(state, action: PayloadAction<"light" | "dark">) {
      const { payload } = action;
      state.themeMode =
        payload || state.themeMode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleThemeMode } = appConfigSlice.actions;
export default appConfigSlice;
