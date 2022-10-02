import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";


// adding my reducers from my slices!
export default configureStore({
    reducer: {
      appState: appStateReducer,
      user: userReducer,
    },
  });