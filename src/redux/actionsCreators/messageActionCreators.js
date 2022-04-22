import axios from 'axios';
import { requestFailed, requestStarted, requestSucceeded } from './feedbackActionCreators';
import {ADD_MESSAGE,SET_ALL_MESSAGES} from '../types/messageTypes';
import {alertSuccess } from '../../utils/feedback';


export const addMessage=(message)=> ({ type: ADD_MESSAGE, payload:message})

export const requestCreatingMessage=(message)=>{
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        dispatch(requestStarted())
       
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/messages`,message, {headers: {authorization: token}})            
            dispatch(requestSucceeded())
            if (res.data && res.data.message) {
                alertSuccess (res.data.message)
            }
            if (res.data && res.data.infoMessage && res.data.infoMessage._id) {
                dispatch(addMessage(res.data.infoMessage))
               
            }
        } catch (error) {
            
            dispatch(requestFailed(error))
        }
    }

}
export const setAllMessages = (messages) => ({type: SET_ALL_MESSAGES, payload: messages})

export const requestAllMessages = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        dispatch(requestStarted())
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/messages`,{headers: {authorization: token}})
            const messages = res.data
            console.log({messages});
            dispatch(setAllMessages(messages))
            dispatch(requestSucceeded())
        } catch (error) {
            console.log(error)
            dispatch(requestFailed(error))

        }
    }
}