import {combineReducers} from 'redux';
import { buttonLikeReducer } from './buttonLike.reducer';
import { favoriteCartReducer } from './favoriteCart.reducer';






export const rootReducer = combineReducers ({
    likeNews:buttonLikeReducer,
    favoriteNews:favoriteCartReducer,
    
    
})