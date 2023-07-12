import { configureStore, Dispatch } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import userdataReducer from "./user/userdataReducer";
import userInfoReducer from "./user/userInfoReducer";
import canteenTokensReducers from "./canteen/canteenTokensReducers";
import canteenInfoReducers from "./canteen/canteenInfoReducers";
import allPackagesReducers from "./canteenPackages/allPackages";
import userwishReducer from "./user/userwishReducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  userdata: userdataReducer,
  userInfo: userInfoReducer,
  canteenTokens: canteenTokensReducers,
  canteenInfo: canteenInfoReducers,
  allPackages: allPackagesReducers,
  wishDetails: userwishReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;

export type StoreType = typeof store;
