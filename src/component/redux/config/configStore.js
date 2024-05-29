// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import dataSlice from "../slices/dataSlice";

import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../slices/dataSlice";

// const rootReducer = combineReducers({
//   data: dataSlice,
// });

// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;
