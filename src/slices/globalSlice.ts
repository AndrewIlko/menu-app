import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Sidebar = {
  active: boolean;
};
interface MenuOption {
  selected: string | undefined;
  selectedCategory: string | undefined;
}

interface GlobalSlice {
  sidebar: Sidebar;
  menu: MenuOption;
}

const initialState: GlobalSlice = {
  sidebar: { active: false },
  menu: { selected: undefined, selectedCategory: undefined },
};

const globalSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.sidebar.active = action.payload;
    },
    setSelectedMenu: (state, action: PayloadAction<string>) => {
      state.menu.selected = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.menu.selectedCategory = action.payload;
    },
  },
});

export const globalReducer = globalSlice.reducer;
export const globalActions = globalSlice.actions;
