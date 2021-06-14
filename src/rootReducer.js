import { ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
	posts : {
		initial1 : {
			title       : 'My First Post',
			description : 'What I am doing right now!',
			body        :
				'Well, to be honest, I am just working on project for this coding bootcamp... and listening to music... while my mom makes dinner in the kitchen.  It is also raining!',
			comments    : [
				{ comment: 'Wow this is a good post!', id: 'comment1' },
				{ comment: 'I agree with you there.', id: 'comment2' }
			]
		},
		initial2 : {
			title       : 'My Second Post',
			description : 'Getting ready for my call with Paritosh',
			body        : 'I should really try to finish up some of this project before we chat on Skype later!',
			comments    : []
		}
	}
};
function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts : { ...state.posts, [uuid()]: action.newPost }
			};

		case UPDATE_POST:
			return {
				...state,
				posts : { ...state.posts, [action.postId]: action.updatedPost }
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

		default:
			return state;
	}
}

export default rootReducer;
