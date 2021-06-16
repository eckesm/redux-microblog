import { ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT, FETCH_POST, VOTE } from '../actionTypes';

function rootReducer(state = {}, action) {
	let post = state[action.postId];

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
			let posts = { ...state };
			delete posts[action.postId];
			return posts;

		case ADD_COMMENT:
			return {
				...state,
				[action.postId]: { ...post, comments: [ ...post.comments, action.comment ] }
			};

		case DELETE_COMMENT:
			return {
				...state,
				[action.postId]: { ...post, comments: post.comments.filter(c => c.id !== action.commentId) }
			};

		case FETCH_POST:
			return {
				...state,
				posts : { ...state.posts, [action.post.id]: action.post }
			};

		case VOTE:
			return {
				...state,
				[action.postId]: { ...post, votes: action.votes }
			};

		// case 'ERROR':
		// 	return {
		// 		...state,
		// 		error : true
		// 	};

		default:
			return state;
	}
}

export default rootReducer;
