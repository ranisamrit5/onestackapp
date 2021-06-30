import { API_SEND_OTP,API_RE_SEND_OTP,API_VERIFY_OTP,API_VERIFY_PAN,API_UPDATE_PAN,API_SAVE_EMAIL } from '../types';

export const apiSendOtp = (params) => ({
    types: API_SEND_OTP,
    payload: {
        client: 'default',
        request: {
            url: '/api/v1/send-otp',
            method: 'post',
            data: {
                ...params,
            }
        },
    },
});

export const apiReSendOtp = (params) => ({
    types: API_RE_SEND_OTP,
    payload: {
        client: 'default',
        request: {
            url: '/api/v1/resend-otp',
            method: 'post',
            data: {
                ...params,
            }
        },
    },
});

export const apiVerifyOtp = (params) => ({
    types: API_VERIFY_OTP,
    payload: {
        client: 'default',
        request: {
            url: '/api/v1/verify-otp',
            method: 'post',
            data: {
                ...params,
            }
        },
    },
});

export const apiVerifyPan = (params) => ({
    types: API_VERIFY_PAN,
    payload: {
        client: 'default',
        request: {
            url: '/api/v1/verify-pan',
            method: 'post',
            data: {
                ...params,
            }
        },
    },
});

export const apiUpdatePan = (params) => ({
    types: API_UPDATE_PAN,
    payload: {
        client: 'default',
        request: {
            url: '/api/v1/update-pan',
            method: 'post',
            data: {
                ...params,
            }
        },
    },
});

export const apiSaveEmail = (params) => ({
    types: API_SAVE_EMAIL,
    payload: {
        client: 'default',
        request: {
            url: '/api/v1/save-email',
            method: 'post',
            data: {
                ...params,
            }
        },
    },
});
