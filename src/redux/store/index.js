import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import getJobSearchReducer from "../reducers/getJobsSearchReducer";

const store = configureStore({
  reducer: combineReducers({
    favourite: favouritesReducer,
    jobs: getJobSearchReducer,
  }),
});

export default store;
