import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

import { workoutsApi } from "./services/workoutsApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [workoutsApi.reducerPath]: workoutsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutsApi.middleware),
});
