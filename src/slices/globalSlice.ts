import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Sidebar = {
  active: boolean;
};

interface GlobalSlice {
  sidebar: Sidebar;
}

const initialState: GlobalSlice = {
  sidebar: { active: false },
};

const globalSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.sidebar.active = action.payload;
    },
  },
});

export const globalReducer = globalSlice.reducer;
export const globalActions = globalSlice.actions;
