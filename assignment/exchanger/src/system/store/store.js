import { combineReducers } from "redux";
import currencyInfo from "./slices/currencyInfoSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    currencyInfo,
});

const store = configureStore({reducer: rootReducer});

export default store;