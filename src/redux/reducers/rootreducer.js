import { combineReducers } from "redux";
import franchiseReducer from './franchiseReducer';
import feedbackReducer  from './feedbackReducer'
import userReducer from "./userReducer";

 const rootReducer = combineReducers({
    franchises: franchiseReducer,
    feedback:feedbackReducer,
    user: userReducer
 })

 export default rootReducer