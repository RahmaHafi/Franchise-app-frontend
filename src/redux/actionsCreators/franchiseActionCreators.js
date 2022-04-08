import axios from 'axios'
import { SET_ALL_FRANCHISES } from '../types/franchiseTypes';

import { requestFailed, requestStarted, requestSucceeded } from './feedbackActionCreators';

export const setAllFranchise = (franchiseArray) => ({
    type: SET_ALL_FRANCHISES,
    payload: franchiseArray
})



export const requestAllFranchise = () => {
    return async (dispatch) => {
        dispatch(requestStarted())
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/franchises`)
            const franchises = res.data
            console.log({ franchises });
            dispatch(setAllFranchise(franchises))
            dispatch(requestSucceeded())
        } catch (error) {
            console.log(error)
            dispatch(requestFailed(error))

        }
    }
}