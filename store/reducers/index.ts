import { combineReducers } from "redux";

// API Reducers
import { waitList } from "../../services/waitList";

export default combineReducers({
  // API
  [waitList.reducerPath]: waitList.reducer,
});
