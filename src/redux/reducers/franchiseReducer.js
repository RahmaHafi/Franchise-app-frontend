import {SET_ALL_FRANCHISES,ADD_FRANCHISE,DELETE_FRANCHISE} from '../types/franchiseTypes'

const initialState={
    all:[],
    selected:""
}

const franchiseReducer=(state = initialState,action)=>{
    switch (action.type) {
        case SET_ALL_FRANCHISES:
            return {...state, all: action.payload};
        case ADD_FRANCHISE :
            return { ...state, all: [...state.all, action.payload] };
        case DELETE_FRANCHISE:
            return { ...state, all: state.all.filter(item => item._id !== action.payload)};
    
        default:
            return state;
    }

}


export default franchiseReducer