import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewPostForm from './NewPostForm';

const PostDetail = ({ blogPosts, updatePost }) => {
	const { postId } = useParams();
	const [ editingPost, setEditingPost ] = useState(false);

	const editPost = () => {
		setEditingPost(true);
	};

	let post = null;
	for (let i = 0; i < blogPosts.length; i++) {
		if (blogPosts[i].id === postId) {
			post = blogPosts[i];
		}
	}

	if (editingPost) {
		return <NewPostForm updatePost={updatePost} post={post} />;
	}

	if (post === null) {
		return <h1>No post with the entered ID.</h1>;
	}
	
	return (
		<div>
			<h3>{post.title}</h3>
			<h5>{post.description}</h5>
			<p>{post.body}</p>
			<div>
				<button onClick={editPost}>Edit</button>
				<button>Delete</button>
			</div>
		</div>
	);
};

export default PostDetail;
