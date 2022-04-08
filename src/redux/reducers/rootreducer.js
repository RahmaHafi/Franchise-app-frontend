import { combineReducers } from "redux";
import franchiseReducer from './franchiseReducer';
import feedbackReducer  from './feedbackReducer'

 const rootReducer = combineReducers({
    franchises: franchiseReducer,
    feedback:feedbackReducer
 })

 export default rootReducer