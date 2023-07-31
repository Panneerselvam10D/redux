import CounterReducer from "./Counter";
import LoggedInReducer from "./IsLoggedIn";
import { combineReducers } from "redux";

const AllReducer = combineReducers({
    Counter : CounterReducer,
    IsLogged : LoggedInReducer
})

export default AllReducer