import * as types from '../actions/action-types';

const initialState = {
    isFetching: false,
    isAuthenticated: sessionStorage.getItem('id_token') ? true : false,
    username: '',
    password: '',
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return Object.assign({}, state, { isFetching: action.isFetching, isAuthenticated: action.isAuthenticated});
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, { isFetching: action.isFetching, isAuthenticated: action.isAuthenticated});
        case types.LOGOUT_REQUEST:
            return Object.assign({}, state, { isFetching: action.isFetching, isAuthenticated: action.isAuthenticated});
        case types.LOGOUT_SUCCESS:
            return Object.assign({}, state, { isFetching: action.isFetching, isAuthenticated: action.isAuthenticated});
        case types.USERNAME_INPUT:
            return Object.assign({}, state, {username: action.value});
        case types.PASSWORD_INPUT:
            return Object.assign({}, state, {password: action.value});
        default:
            return state;
    }
}

export default UserReducer;
