import { API_SEND_OTP } from '../types';

const initialData = {
    data: null,
    token: null
};

export default (state = initialData, action) => {
    switch (action.type) {
        case API_SEND_OTP[0]:
            return {
                ...state,
                data: action?.payload?.data,
            };
        case API_SEND_OTP[1]:
            return {
                ...state,
                data: action?.payload?.data,
            };
        case API_SEND_OTP[2]:
            return {
                ...state,
                data: action?.payload?.data,
            };
        default:
            return state;
    }
};

