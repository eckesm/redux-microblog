import axios from 'axios';
import {
	ADD_POST,
	UPDATE_POST,
	DELETE_POST,
	ADD_COMMENT,
	DELETE_COMMENT,
	FETCH_TITLES,
	FETCH_POST
} from './actionTypes';

const API_URL = 'http://localhost:5000/api';

// ADD_POST

export function addPost(post) {
	return async function(dispatch) {
		try {
			const { data } = await axios.post(`${API_URL}/posts`, post);
			dispatch(addedPost(data));
			dispatch(fetchTitles());
		} catch (e) {
			dispatch(gotError());
		}
	};
}

function addedPost(post) {
	return {
		type : ADD_POST,
		post
	};
}

// UPDATE_POST

export function updatePost(post) {
	return async function(dispatch) {
		try {
			const { data } = await axios.put(`${API_URL}/posts/${post.id}`, post);
			dispatch(updatedPost(data));
			dispatch(fetchTitles());
		} catch (e) {
			dispatch(gotError());
		}
	};
}

function updatedPost(post) {
	return {
		type : UPDATE_POST,
		post
	};
}

// DELETE_POST

export function deletePost(postId) {
	return async function(dispatch) {
		try {
			const { data } = await axios.delete(`${API_URL}/posts/${postId}`);
			dispatch(deletedPost(postId, data));
			dispatch(fetchTitles());
		} catch (e) {
			dispatch(gotError());
		}
	};
}

function deletedPost(postId, message) {
	return {
		type    : DELETE_POST,
		postId,
		message
	};
}

// ADD_COMMENT

export function addComment(comment) {
	return async function(dispatch) {
		try {
			const { data } = await axios.post(`${API_URL}/posts/${comment.post_id}/comments`, comment);
			dispatch(addedComment(data,comment.post_id));
		} catch (e) {
			dispatch(gotError());
		}
	};
}

function addedComment(comment,postId) {
	return {
		type : ADD_COMMENT,
		comment,
        postId
	};
}

// DELETE_COMMENT

export function deleteComment(postId,commentId) {
	return async function(dispatch) {
		try {
			const { data } = await axios.delete(`${API_URL}/posts/${postId}/comments/${commentId}`);
			dispatch(deletedComment(postId, data));
		} catch (e) {
			dispatch(gotError());
		}
	};
}

function deletedComment(postId,commentId, message) {
	return {
		type    : DELETE_COMMENT,
		postId,
        commentId,
		message
	};
}

// FETCH_TITLES

export function fetchTitles() {
	return async function(dispatch) {
		try {
			const { data } = await axios.get(`${API_URL}/posts`);
			dispatch(gotTitles(data));
		} catch (e) {
			dispatch(gotError());
		}
	};
}

function gotTitles(titles) {
	return {
		type   : FETCH_TITLES,
		titles
	};
}

// FETCH_POST

export function fetchPost(postId) {
	return async function(dispatch) {
		try {
			const { data } = await axios.get(`${API_URL}/posts/${postId}`);
			dispatch(gotPost(data));
		} catch (e) {
			dispatch(gotError());
		}
	};
}

function gotPost(post) {
	return {
		type : FETCH_POST,
		post
	};
}

// ERROR

function gotError() {
	return {
		type : 'ERROR'
	};
}
