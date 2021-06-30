import { SET_USER_SESSION, CLEAR_USER_SESSION,SAVE_USERDATA } from '../types';

const initialData = {
  isLoading: false,
  data: null,
  isUserLoggedin: false,
  userData:null
};

export default (state = initialData, action) => {
  switch (action.type) {

    case SAVE_USERDATA:
      return {
        ...state,
        userData:action?.payload?.userData
      };

    case SET_USER_SESSION:
      return {
        ...state,
        isUserLoggedin: true,
      };

    case CLEAR_USER_SESSION:
      return {
        ...state,
        isUserLoggedin: false,
      };

    default:
      return state;
  }
};
