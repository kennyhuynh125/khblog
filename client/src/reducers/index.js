import { combineReducers } from 'redux';
import PostReducer from './post-reducer';
import UserReducer from './user-reducer';

// combine all the reducers into one root one
const rootReducer = combineReducers({
    posts: PostReducer,
    users: UserReducer,
});

export default rootReducer;
