import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducers";

// API Reducers
import { waitList } from "../services/waitList";

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer,
    middleware: [...([thunk] as const), waitList.middleware],
    preloadedState,
  });
};

export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
