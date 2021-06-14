import {ADD_POST,UPDATE_POST,DELETE_POST,ADD_COMMENT,DELETE_COMMENT} from './actionTypes'

export const addPost=(newPost)=>({type:ADD_POST,newPost})
export const updatePost=(postId,updatedPost)=>({type:UPDATE_POST,postId,updatedPost})
export const deletePost=(postId)=>({type:DELETE_POST,postId})
export const addComment=(postId, comment)=>({type:ADD_COMMENT,postId, comment})
export const deleteComment=(postId, commentId)=>({type:DELETE_COMMENT,postId, commentId})