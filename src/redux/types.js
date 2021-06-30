export const createTypes = (namespace, type) => [
  `${namespace}/${type}_REQUEST`,
  `${namespace}/${type}_SUCCESS`,
  `${namespace}/${type}_FAIL`,
];

const action_SET_USER_SESSION = 'action_SET_USER_SESSION';
const action_CLEAR_USER_SESSION = 'action_CLEAR_USER_SESSION';
const action_SAVE_USERDATA = 'action_SAVE_USERDATA';

const action_API_SEND_OTP = 'action_API_SEND_OTP';
const action_API_RE_SEND_OTP = 'action_API_RE_SEND_OTP';
const action_API_VERIFY_OTP = 'action_API_VERIFY_OTP';
const action_API_VERIFY_PAN = 'action_API_VERIFY_PAN';
const action_API_UPDATE_PAN = 'action_API_UPDATE_PAN';
const action_API_SAVE_EMAIL = 'action_API_SAVE_EMAIL';

export const SET_USER_SESSION = createTypes(action_SET_USER_SESSION, 'SET_USER_SESSION');
export const CLEAR_USER_SESSION = createTypes(action_CLEAR_USER_SESSION, 'CLEAR_USER_SESSION');
export const SAVE_USERDATA = createTypes(action_SAVE_USERDATA, 'SAVE_USERDATA');

export const API_SEND_OTP = createTypes(action_API_SEND_OTP, 'API_SEND_OTP');
export const API_RE_SEND_OTP = createTypes(action_API_RE_SEND_OTP, 'API_RE_SEND_OTP');
export const API_VERIFY_OTP = createTypes(action_API_VERIFY_OTP, 'API_VERIFY_OTP');
export const API_VERIFY_PAN = createTypes(action_API_VERIFY_PAN, 'API_VERIFY_PAN');
export const API_UPDATE_PAN = createTypes(action_API_UPDATE_PAN, 'API_UPDATE_PAN');
export const API_SAVE_EMAIL = createTypes(action_API_SAVE_EMAIL, 'API_SAVE_EMAIL');

