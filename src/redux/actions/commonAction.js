import { SET_USER_SESSION, CLEAR_USER_SESSION,SAVE_USERDATA } from '../types';

export const setUserSession = () => ({
    type: SET_USER_SESSION,
});
export const clearUserSession = () => ({
    type: CLEAR_USER_SESSION,
});
export const saveUserData = (params) => ({
    type: SAVE_USERDATA,
    payload:params
});