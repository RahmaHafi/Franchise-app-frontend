import {SET_ALL_FRANCHISES,ADD_FRANCHISE,DELETE_FRANCHISE,SELECT_FRANCHISE,UPDATE_FRANCHISE} from '../types/franchiseTypes'

const initialState={
    all:[],
    selected: null
}

const franchiseReducer=(state = initialState,action)=>{
    switch (action.type) {
        case SET_ALL_FRANCHISES:
            return {...state, all: action.payload};
        case ADD_FRANCHISE :
            return { ...state, all: [...state.all, action.payload] };
        case DELETE_FRANCHISE:
            return { ...state, all: state.all.filter(item => item._id !== action.payload)};
        case SELECT_FRANCHISE:
            return {...state,selected: action.payload}
        case UPDATE_FRANCHISE:
            return { ...state, all: state.all.map(item => item._id === action.payload.id ? { ...item, ...action.payload.data } : item) };
        default:
            return state;
    }

}


export default franchiseReducer