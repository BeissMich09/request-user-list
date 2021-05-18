import { combineReducers, createStore } from "redux";
import newUserReducer from "./new-user-reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({ usersReducer, newUserReducer });

let store = createStore(reducers);
export default store;
