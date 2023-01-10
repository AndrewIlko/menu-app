import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "../slices/globalSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    page: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();

export default store;
