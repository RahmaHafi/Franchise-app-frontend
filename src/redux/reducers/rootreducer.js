import { combineReducers } from "redux";
import franchiseReducer from './franchiseReducer';
import feedbackReducer  from './feedbackReducer'
import userReducer from "./userReducer";
import messagesReducer from "./messagesReducer";

 const rootReducer = combineReducers({
    franchises: franchiseReducer,
    feedback:feedbackReducer,
    user: userReducer,
    messages: messagesReducer
 })

 export default rootReducer