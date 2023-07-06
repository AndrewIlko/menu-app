import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "../slices/globalSlice";
import { useDispatch } from "react-redux";
import { api } from "../rtk/api";

const reducers = combineReducers({
  page: globalReducer,
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();

export default store;
