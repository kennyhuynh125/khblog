import * as types from './action-types';

export const requestLogin = (isFetching, isAuthenticated) => {
    return {
        type: types.LOGIN_REQUEST,
        isFetching,
        isAuthenticated
    };
}

export const receiveLogin = (isFetching, isAuthenticated) => {
    return {
        type: types.LOGIN_SUCCESS,
        isFetching,
        isAuthenticated,
    };
}

export const requestLogout = (isFetching, isAuthenticated) => {
    return {
        type: types.LOGOUT_REQUEST,
        isFetching,
        isAuthenticated,
    };
}

export const receiveLogout = (isFetching, isAuthenticated) => {
    return {
        type: types.LOGOUT_SUCCESS,
        isFetching,
        isAuthenticated,
    };
}
