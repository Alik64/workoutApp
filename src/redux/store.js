import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { authApi } from "./services/authApi";

import { workoutsApi } from "./services/workoutsApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [workoutsApi.reducerPath]: workoutsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(workoutsApi.middleware)
      .concat(authApi.middleware),
});
