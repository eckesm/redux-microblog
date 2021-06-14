import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchPost } from './actions';
import NewPostForm from './NewPostForm';
import Comments from './Comments';
import { deletePost } from './actions';

const PostDetail = () => {
	const { posts } = useSelector(store => store);
	const { postId } = useParams();
	const [ editingPost, setEditingPost ] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchPost(postId));
		},
		[ dispatch, postId ]
	);

	const updateThisPost = () => {
		setEditingPost(true);
	};

	const deleteThisPost = postId => {
		dispatch(deletePost(postId));
		history.push('/');
	};

	let post = null;
	if (postId in posts) {
		post = posts[postId];
	}
	else {
		return <h1>No post with the entered ID.</h1>;
	}

	if (editingPost) {
		return <NewPostForm postId={postId} />;
	}

	return (
		<div>
			<h3>{post.title}</h3>
			<h5>{post.description}</h5>
			<p>{post.body}</p>
			<div>
				<button onClick={updateThisPost}>Edit</button>
				<button onClick={() => deleteThisPost(postId)}>Delete</button>
			</div>
			<Comments postId={postId} comments={post.comments} />
		</div>
	);
};

export default PostDetail;
