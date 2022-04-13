import axios from 'axios'
import { SET_ALL_FRANCHISES, ADD_FRANCHISE} from '../types/franchiseTypes';

import { requestFailed, requestStarted, requestSucceeded } from './feedbackActionCreators';
import {alertSuccess } from '../../utils/feedback'
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
export const addFranchise=(franchise)=> ({ type: ADD_FRANCHISE, payload:franchise})

export const requestCreatingFranchise=(formData,history)=>{
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        dispatch(requestStarted())
        const reqBody = {
            basicFranchiseInfo: {
                franchiseLogoUrl: formData.franchiseLogoUrl,
                franchiseName: formData.franchiseName,
                sector: formData.sector,
                yearOfCreation: formData.yearOfCreation,
                numberOfUnities: formData.numberOfUnities
            },
            contactDetails: {
                adress: formData.adress,
                country: formData.country,
                phone: formData.phone,
                email:formData.email,
                webSiteUrl:formData.webSiteUrl,
                capital: formData.capital,
                commercialRegister: formData.commercialRegister,
                yearOfCreationOfTheNetwork: formData.yearOfCreationOfTheNetwork
            },
            typicalFranchisee: {
                populationOfCatchment:formData.populationOfCatchment,
                locationQuality: formData.locationQuality,
                averageStoreArea: formData.averageStoreArea,
                annualTurnover: formData.annualTurnover,
                personalContribution:formData.personalContribution,
                investment:formData.investment,
                profile:formData.profile
        
            },
            accessToTheNetwork: {
                contractDuration: formData.contractDuration,
                entranceFees:formData.entranceFees,
                directRoyalties:formData.directRoyalties,
                indirectRoyalties:formData.indirectRoyalties,
                otherBonds:formData.otherBonds,
                offeredTrainingDuration:formData.offeredTrainingDuration
            }

        }
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/franchises`,reqBody, {headers: {authorization: token}})            
            dispatch(requestSucceeded())
            if (res.data && res.data.message) {
                alertSuccess (res.data.message)
            }
            if (res.data && res.data.franchise && res.data.franchise._id) {
                dispatch(addFranchise(res.data.franchise))
                history.push('/dashboard')
            }
        } catch (err) {
            console.log({err});
            let errorMessage = err.message || 'Request failed'            
            if (err && err.response && err.response.data && err.response.data.error && typeof(err.response.data.error) === 'string') {
                errorMessage = err.response.data.error
            }
            if (err && err.response && err.response.data && err.response.data.error && err.response.data.error.details) {
                errorMessage = err.response.data.error.details[0] && err.response.data.error.details[0].message
            }
            dispatch(requestFailed(errorMessage))
        }
    }

}