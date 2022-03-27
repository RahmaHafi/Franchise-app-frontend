import axios from "axios"
import {SET_ALL_FRANCHISES} from '../types/franchiseTypes'


export const setAllFranchise=(franchiseArray)=>({
    type:SET_ALL_FRANCHISES,
    payload: franchiseArray
})




export const requestAllFranchise=()=>{
    return async (dispatch) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/franchise`)
            const franchises = res.data
            console.log({franchises});
            dispatch(setAllFranchise(franchises))
        } catch (error) {
            console.log(error)
        }
    }
}