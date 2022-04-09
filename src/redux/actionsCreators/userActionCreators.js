import axios from 'axios';

import { alertSuccess } from '../../utils/feedback';
import {LOGIN} from '../types/userTypes';
import {requestStarted,requestSucceeded,requestFailed} from '../actionsCreators/feedbackActionCreators'

export const login = (user, token) => ({
    type: LOGIN,
    payload: { user, token }
})

export const requestLogin = (email, password) => {
    return async (dispatch) => {
        dispatch(requestStarted())
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password })
            dispatch(requestSucceeded())
            const { message, user, token } = res.data
            alertSuccess(message)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch(login(user, token))
        } catch (error) {
            dispatch(requestFailed(error))
        }

    }

}
