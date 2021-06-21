import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favesReducer from './favesReducer';

export const reducer = combineReducers({
    movieReducer,
    favesReducer
})