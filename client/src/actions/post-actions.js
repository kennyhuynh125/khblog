import * as types from './action_types';

// action to get all posts
export const getPostsSuccess = (posts) => {
    return {
        type: types.GET_POSTS_SUCCESS,
        posts,
    };
}

// action to get a single post
export const getPostSuccess = (post) => {
    return {
        type: types.GET_POST_SUCCESS,
        post,
    };
}

// action to update a single post
export const updatePostSuccess = (post) => {
    return {
        type: types.UPDATE_POST_SUCCESS,
        post,
    };
}
