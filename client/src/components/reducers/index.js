import AuthReducer from "./AuthReducer";
import NavReducer from "./NavReducer";
import {combineReducers} from "redux";
export default combineReducers({
    //labelname:actual reducer
    AuthReducer:AuthReducer,
    NavReducer:NavReducer
});