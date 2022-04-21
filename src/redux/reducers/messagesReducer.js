import { SET_ALL_MESSAGES,ADD_MESSAGE}from '../types/messageTypes';

const initialState={
    all : []
}


const messagesReducer=(state = initialState,action)=>{
    switch (action.payload) {
        case SET_ALL_MESSAGES:
            return {...state, all: action.payload};
        case ADD_MESSAGE:
            return { ...state, all: [...state.all, action.payload] };
            
    
        default:
            return state;
    }
}

export default messagesReducer;