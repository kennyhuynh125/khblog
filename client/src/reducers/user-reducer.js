import * as types from '../actions/action-types';

const initialState = {
    isFetching: false,
    isAuthenticated: false
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
        default:
            return state;
    }
}

export default UserReducer;
