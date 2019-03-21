import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import streamReducer from './StreamReducer'

import authReducer from './authReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    streams: streamReducer
});