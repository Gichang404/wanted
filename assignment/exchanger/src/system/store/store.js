import { combineReducers } from "redux";
import Symbols from "./slices/Symbols";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    Symbols,
});

const store = configureStore({reducer: rootReducer});

export default store;