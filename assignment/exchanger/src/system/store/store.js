import { combineReducers } from "redux";
import Symbols from "./slices/baseSymbol";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    baseSymbol: Symbols,
});

const store = configureStore({reducer: rootReducer});

export default store;