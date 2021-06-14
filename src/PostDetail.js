import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import NewCommentForm from './NewCommentForm';
import { deletePost, deleteComment } from './actions';

const PostDetail = () => {
	const { posts } = useSelector(store => store);
	const { postId } = useParams();
	const [ editingPost, setEditingPost ] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();

	const updateThisPost = () => {
		setEditingPost(true);
	};

	const deleteThisPost = postId => {
		dispatch(deletePost(postId));
		history.push('/');
	};

	let post = null;
	if (postId in posts){
		post =posts[postId]
	} else{
		return <h1>No post with the entered ID.</h1>
	}

	if (editingPost) {
		return <NewPostForm postId={postId} />;
	}

	const comments = post.comments || [];

	return (
		<div>
			<h3>{post.title}</h3>
			<h5>{post.description}</h5>
			<p>{post.body}</p>
			<div>
				<button onClick={updateThisPost}>Edit</button>
				<button onClick={() => deleteThisPost(postId)}>Delete</button>
			</div>
			<div>
				<h4>Comments</h4>
				{comments.map(comment => (
					<div key={comment.id}>
						<p>{comment.comment}</p>
						<button onClick={() => dispatch(deleteComment(postId, comment.id))}>x</button>
					</div>
				))}
				<NewCommentForm postId={postId} />
			</div>
		</div>
	);
};

export default PostDetail;
