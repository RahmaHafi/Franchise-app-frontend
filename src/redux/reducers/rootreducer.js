import { combineReducers } from "redux";
import franchiseReducer from './franchiseReducer';
import feedbackReducer  from './feedbackReducer'
import userReducer from "./userReducer";
import messagesReducer from "./messagesReducer";
import jobReducer from "./jobReducer";
import expertReducer from "./expertReducer";

 const rootReducer = combineReducers({
    franchises: franchiseReducer,
    feedback:feedbackReducer,
    user: userReducer,
    messages: messagesReducer,
    jobs:jobReducer,
    experts:expertReducer
 })

 export default rootReducer