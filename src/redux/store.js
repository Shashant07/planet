import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import { thunk } from "redux-thunk";
import { reducer } from "./slices/userSlice";
import sidebarSlice from "./slices/sidebarSlice";

const rootReducer = combineReducers({
    user: reducer
});

const store = configureStore({
    reducer: rootReducer,
    sidebar: sidebarSlice
    // middleware: [thunk, logger],
});

export default store;