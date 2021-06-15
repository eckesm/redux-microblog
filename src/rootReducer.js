import {
	ADD_POST,
	UPDATE_POST,
	DELETE_POST,
	ADD_COMMENT,
	DELETE_COMMENT,
	FETCH_TITLES,
	FETCH_POST,
	VOTE
} from './actionTypes';

const INITIAL_STATE = {
	posts   : {},
	titles  : [],
	error   : false
};

function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts : { ...state.posts, [action.post.id]: action.post }
			};

		case UPDATE_POST:
			return {
				...state,
				posts : { ...state.posts, [action.post.id]: action.post }
			};

		case DELETE_POST:
			const postsCopy = state.posts;
			delete postsCopy[action.postId];
			return {
				...state,
				posts : postsCopy
			};

		case ADD_COMMENT:
			const commentedPost = state.posts[action.postId];
			commentedPost.comments.push(action.comment);

			return {
				...state,
				posts : { ...state.posts, [action.postId]: commentedPost }
			};

		case DELETE_COMMENT:
			const removeCommentPost = state.posts[action.postId];
			removeCommentPost.comments = removeCommentPost.comments.filter(comment => comment.id !== action.commentId);

			return {
				...state,
				posts : { ...state.posts, [action.postId]: removeCommentPost }
			};

		case FETCH_TITLES:
			return {
				...state,
				titles : action.titles
			};

		case FETCH_POST:
			return {
				...state,
				posts : { ...state.posts, [action.post.id]: action.post }
			};

		case VOTE:
			const votedPost = state.posts[action.postId];
			votedPost.votes = action.votes;

			return {
				...state,
				posts : { ...state.posts, [action.postId]: votedPost }
			};

		case 'ERROR':
			return {
				...state,
				error : true
			};

		default:
			return state;
	}
}

export default rootReducer;
