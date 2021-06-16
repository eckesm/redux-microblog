import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchPost, deleteComment } from './actions';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
import { deletePost, addComment, voteOnPost } from './actions';
import NewCommentForm from './NewCommentForm';
import Comments from './Comments';

const Post = props => {
	const [ editingPost, setEditingPost ] = useState(false);
	const postId = Number(useParams().postId);
	const history = useHistory();
	const post = useSelector(store => store.posts[postId]);
	const dispatch = useDispatch();

	useEffect(
		function loadPostWhenPostOrIdChanges() {
			async function getPost() {
				dispatch(fetchPost(postId));
			}
			if (!post) {
				getPost();
			}
		},
		[ dispatch, postId, post ]
	);

	// console.log(postId)
	// console.log(post)

	const updateThisPost = () => {
		setEditingPost(true);
	};

	const deleteThisPost = () => {
		dispatch(deletePost(postId));
		history.push('/');
	};

	const deleteAComment = commentId => {
		dispatch(deleteComment(postId, commentId));
	};

	const addAComment = formData => {
		dispatch(addComment(formData));
	};

	const voteOnThisPost = direction => {
		dispatch(voteOnPost(postId, direction));
	};

	if (!post) return <h1>Loading...</h1>;

	if (editingPost) {
		return <NewPostForm postId={postId} />;
	}

	return (
		<div>
			<PostDetail
				post={post}
				updateThisPost={updateThisPost}
				deleteThisPost={deleteThisPost}
				voteOnThisPost={voteOnThisPost}
			/>
			<Comments comments={post.comments || []} deleteAComment={deleteAComment} />
			<NewCommentForm postId={post.id} addAComment={addAComment} />
		</div>
	);
};

export default Post;
