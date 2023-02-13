import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import getFetchJobsReducer from "../reducers/getJobsSearchReducer";

const store = configureStore({
  reducer: combineReducers({
    favourite: favouritesReducer,
    jobs: getFetchJobsReducer,
  }),
});

export default store;
