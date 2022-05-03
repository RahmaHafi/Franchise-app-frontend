import axios from 'axios';
import { SET_ALL_EXPERTS} from '../types/expertTypes';

import { requestFailed, requestStarted, requestSucceeded } from './feedbackActionCreators';


export const setAllExpert = (expertArray) => ({
    type: SET_ALL_EXPERTS,
    payload: expertArray
})

export const requestAllExpert = () => {
    return async (dispatch) => {
        dispatch(requestStarted())
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/experts`)
            const experts = res.data
            console.log({ experts });
            dispatch(setAllExpert(experts))
            dispatch(requestSucceeded())
        } catch (error) {
            console.log(error)
            dispatch(requestFailed(error))

        }
    }
}