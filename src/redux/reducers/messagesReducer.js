import {SET_ALL_MESSAGES,ADD_MESSAGE}from '../types/messageTypes';

const initialState={
    all : []
}


const messagesReducer=(state = initialState,action)=>{
    switch (action.payload) {
        case SET_ALL_MESSAGES:
            console.log('hello',{...state, all: action.payload})
             return {...state, all: action.payload};
        case ADD_MESSAGE:
            return { ...state, all: [...state.all, action.payload] };
            
    
        default:
            return state;
    }
}

export default messagesReducer;