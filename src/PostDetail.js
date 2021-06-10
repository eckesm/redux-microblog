import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import NewCommentForm from './NewCommentForm';

const PostDetail = ({ blogPosts, updatePost, deletePost, addComment, deleteComment }) => {
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

	const comments = post.comments || [];

	return (
		<div>
			<h3>{post.title}</h3>
			<h5>{post.description}</h5>
			<p>{post.body}</p>
			<div>
				<button onClick={editPost}>Edit</button>
				<button onClick={() => deletePost(post.id)}>Delete</button>
			</div>
			<div>
				<h4>Comments</h4>
				{comments.map(comment => (
					<div key={comment.id}>
						<p>{comment.comment}</p>
						<button onClick={() => deleteComment(post.id, comment.id)}>x</button>
					</div>
				))}
				<NewCommentForm addComment={addComment} postId={post.id} />
			</div>
		</div>
	);
};

export default PostDetail;
