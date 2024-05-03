import { combineReducers, configureStore } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  count: reducer,
});

export const store = configureStore(rootReducer);
