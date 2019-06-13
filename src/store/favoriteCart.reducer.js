
import {omit} from 'lodash'

export const favoriteCartReducer = (state = {

    
},action) => {

switch(action.type) { 

case 'LIKE': 
return { 
    ...state,
    [action.id]: action.id
}; 

case 'DISLIKE': 
return omit(state,action.id);

default: return state; } 
}
