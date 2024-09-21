import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk";
import authReducer from "./authReducer";

// Create store with thunk middleware
export const store = createStore(authReducer, applyMiddleware(thunk as ThunkMiddleware<any, any>));