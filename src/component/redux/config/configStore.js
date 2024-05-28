import { createStore } from "redux";
import { combineReducers } from "redux";
import dataSlice from "../slices/dataSlice";

const rootReducer = combineReducers({
  data: dataSlice,
});

const store = createStore(rootReducer);

export default store;
