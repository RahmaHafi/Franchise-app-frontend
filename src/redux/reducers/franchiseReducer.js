import {SET_ALL_FRANCHISES} from '../types/franchiseTypes'

const initialState={
    all:[],
    selected:""
}

const franchiseReducer=(state = initialState,action)=>{
    switch (action.type) {
        case SET_ALL_FRANCHISES:
            
            return {...state, all: action.payload}
    
        default:
            return state;
    }

}


export default franchiseReducer