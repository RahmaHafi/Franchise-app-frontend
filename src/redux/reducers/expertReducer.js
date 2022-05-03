import {SET_ALL_EXPERTS} from '../types/expertTypes';

const initialState={
    all:[],
    selected: null
}

const expertReducer=(state = initialState,action)=>{
    switch (action.type) {
        case SET_ALL_EXPERTS:
            return {...state, all: action.payload};
       
        default:
            return state;
    }

}


export default expertReducer