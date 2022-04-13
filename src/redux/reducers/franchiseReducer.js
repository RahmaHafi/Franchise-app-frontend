import {SET_ALL_FRANCHISES,ADD_FRANCHISE} from '../types/franchiseTypes'

const initialState={
    all:[],
    selected:""
}

const franchiseReducer=(state = initialState,action)=>{
    switch (action.type) {
        case SET_ALL_FRANCHISES:
            return {...state, all: action.payload}
        case ADD_FRANCHISE :
            return { ...state, all: [...state.all, action.payload] }
    
        default:
            return state;
    }

}


export default franchiseReducer