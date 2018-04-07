import {combineReducers} from "redux";
import AuthReducer from './AuthReducer';
import PhoneReducers from "./PhoneReducers";

export default combineReducers({
    auth:AuthReducer,
    phones: PhoneReducers
});