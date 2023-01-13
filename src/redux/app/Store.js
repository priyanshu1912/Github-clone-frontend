import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/AuthSlice";
import repoReducer from "../features/repo/RepoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    repo: repoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
