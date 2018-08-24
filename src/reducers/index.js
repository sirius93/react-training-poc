import { combineReducers } from 'redux';

import {userDataReducer} from './requestProfileData';

const rootReducer = combineReducers({
    userDataReducer : userDataReducer
})

export default rootReducer;