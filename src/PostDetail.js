import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Voting from './Voting';
import Comments from './Comments';
import { voteOnPost, deleteComment } from './actions';

const PostDetail = ({ post, updateThisPost, deleteThisPost }) => {
	const { title, description, body, votes, comments } = post;
	let [ postVotes, setPostVotes ] = useState(votes);
	let [ postComments, setPostComments ] = useState(comments);
	const dispatch = useDispatch();

	const voteOnThisPost = direction => {
		if (direction === 'up') {
			setPostVotes(postVotes + 1);
		}
		else {
			setPostVotes(postVotes - 1);
		}

		dispatch(voteOnPost(post.id, direction));
	};

	const deleteAComment = commentId => {
		dispatch(deleteComment(post.id, commentId));
		setPostComments(postComments.filter(comment => comment.id !== commentId));
	};

	return (
		<div>
			<h3>{title}</h3>
			<h5>{description}</h5>
			<p>{body}</p>
			<div>
				<button onClick={updateThisPost}>Edit</button>
				<button onClick={deleteThisPost}>Delete</button>
			</div>

			<Voting votes={postVotes} voteOnThisPost={voteOnThisPost} />
			<Comments comments={postComments} deleteAComment={deleteAComment} />
			
		</div>
	);
};

export default PostDetail;
