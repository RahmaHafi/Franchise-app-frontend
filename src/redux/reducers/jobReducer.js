import {ADD_JOB} from '../types/jobTypes';

const initialState={
    all:[],
    selected: null
}

const jobReducer=(state = initialState,action)=>{
    switch (action.type) {
        
        case ADD_JOB :
            return { ...state, all: [...state.all, action.payload] };
        
    
        default:
            return state;
    }

}


export default jobReducer