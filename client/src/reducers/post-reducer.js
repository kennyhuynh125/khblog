import * as types from '../actions/action-types';

const initialState = {
    posts: [],
};

const PostReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_POSTS_SUCCESS:
            return Object.assign([], state, { posts: action.posts });
        case types.GET_POST_SUCCESS:
            return Object.assign([], state, {posts: action.post, postId: action.postId});
        case types.UPDATE_POST_SUCCESS:
            return Object.assign([], state, {posts: action.post, postId: action.postId});
        default:
            return state;
    }
}

export default PostReducer;
