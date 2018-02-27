import {
    CREATE_USER,
    EDIT_USER,
    DELETE_USER,
} from "./actionType";

export const createPost = post => ({
    type: CREATE_USER,
    post: post
});

export const editPost = (post, id) => ({
    type: EDIT_USER,
    post: post,
    index: id
});

export const removePost = id => ({
    type: DELETE_USER,
    index: id
});