import { combineReducers } from 'redux';
import userSession from './userSession';
import common from './common';

export const persistWhitelist = ["common", "userSession"];

export default combineReducers({
    common,
    userSession
});
