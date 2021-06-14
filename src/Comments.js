import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import NewCommentForm from './NewCommentForm';
import { deleteComment } from './actions';

const Comments = ({ postId, comments }) => {
	const [ postComments, setPostComments ] = useState(comments);
	const dispatch = useDispatch();

	const deleteAComment = commentId => {
		dispatch(deleteComment(postId, commentId));
		setPostComments(postComments.filter(comment => comment.id !== commentId));
	};

	return (
		<div>
			<h4>Comments</h4>
			{postComments.map(comment => (
				<div key={comment.id}>
					<p>{comment.text}</p>
					<button onClick={() => deleteAComment(comment.id)}>x</button>
				</div>
			))}
			<NewCommentForm postId={postId} />
		</div>
	);
};

export default Comments;
