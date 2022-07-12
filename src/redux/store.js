import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { workoutsApi } from "./services/workoutsApi";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [workoutsApi.reducerPath]: workoutsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutsApi.middleware),
});
