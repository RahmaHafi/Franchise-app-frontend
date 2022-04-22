import axios from 'axios';
import {ADD_JOB} from '../types/jobTypes';

import { requestFailed, requestStarted, requestSucceeded } from './feedbackActionCreators';
import {alertSuccess } from '../../utils/feedback';


export const addJob=(job)=> ({ type: ADD_JOB, payload:job})

export const requestCreatingJob=(jobData)=>{
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        dispatch(requestStarted())
       console.log(`jobData`, jobData);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/jobs`,jobData, {headers: {authorization: token}})            
            dispatch(requestSucceeded())
            console.log(res);
            if (res.data && res.data.message) {
                alertSuccess (res.data.message)
            }
            if (res.data && res.data.job && res.data.job._id) {
                dispatch(addJob(res.data.job))
                
            }
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }

}