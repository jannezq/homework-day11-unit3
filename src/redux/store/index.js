import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import getJobSearchReducer from "../reducers/getJobsSearchReducer";
// import { persistStore, persistReducer } from "redux-persist";

const combineReducer = combineReducers({
  favourite: favouritesReducer,
  jobs: getJobSearchReducer,
});

const store = configureStore({
  reducer: combineReducer,
});

export default store;
