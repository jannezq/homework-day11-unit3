import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import getJobSearchReducer from "../reducers/getJobsSearchReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  storage: localStorage,
  key: "root", // this brings the whole redux store into persistency
};

const combineReducer = combineReducers({
  favourite: favouritesReducer,
  jobs: getJobSearchReducer,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
