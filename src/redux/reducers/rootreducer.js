import { combineReducers } from "redux";
import franchiseReducer from './franchiseReducer'

 const rootReducer = combineReducers({
    franchises: franchiseReducer
 })

 export default rootReducer