import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchPost } from './actions';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
import { deletePost, addComment } from './actions';
import NewCommentForm from './NewCommentForm';

const Post = () => {
	const [ editingPost, setEditingPost ] = useState(false);
	const postId = Number(useParams().postId);
	const history = useHistory();
	const post = useSelector(store => store.posts[postId]);
	const dispatch = useDispatch();

	useEffect(
		() => {
			// async function getPostfromAPI() {
				dispatch(fetchPost(postId));
			// }
			// if (!post) {
				// getPostfromAPI();
			// }
		},
		[ dispatch, postId, post ]
	);

	const updateThisPost = () => {
		setEditingPost(true);
	};

	const deleteThisPost = () => {
		dispatch(deletePost(postId));
		history.push('/');
	};

    const addAComment = formData => {
		dispatch(addComment(formData));
	};

	if (!post) {
		return <h1>Loading...</h1>;
	}


	if (editingPost) {
		return <NewPostForm postId={postId} />;
	}

	return (
		<div>
			<PostDetail
				post={post}
				updateThisPost={updateThisPost}
				deleteThisPost={deleteThisPost}
			/>
            <NewCommentForm postId={post.id} addAComment={addAComment} />
		</div>
	);
};

export default Post;
