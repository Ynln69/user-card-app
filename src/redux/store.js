import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./userApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
});
