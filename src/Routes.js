import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import BlogHome from './BlogHome';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';

const Routes = () => {
	const INITIAL_STATE = [
		{
			id          : 'initial1',
			title       : 'My First Post',
			description : 'What I am doing right now!',
			body        :
				'Well, to be honest, I am just working on project for this coding bootcamp... and listening to music... while my mom makes dinner in the kitchen.  It is also raining!',
			comments    : [
				{ comment: 'Wow this is a good post!', id: 'comment1' },
				{ comment: 'I agree with you there.', id: 'comment2' }
			]
		},
		{
			id          : 'initial2',
			title       : 'My Second Post',
			description : 'Getting ready for my call with Paritosh',
			body        : 'I should really try to finish up some of this project before we chat on Skype later!'
		}
	];

	const history = useHistory();
	const [ blogPosts, setBlogPosts ] = useState(INITIAL_STATE);

	const addPost = newPost => {
		setBlogPosts([ ...blogPosts, newPost ]);
	};

	const updatePost = updatedPost => {
		const newArray = [];
		for (let i = 0; i < blogPosts.length; i++) {
			if (blogPosts[i].id === updatedPost.id) {
				newArray.push(updatedPost);
			}
			else {
				newArray.push(blogPosts[i]);
			}
		}
		setBlogPosts(newArray);
	};

	const deletePost = postId => {
		setBlogPosts(blogPosts.filter(post => post.id !== postId));
		history.push('/');
	};

	const addComment = (postId, comment) => {
		const newArray = [];
		for (let i = 0; i < blogPosts.length; i++) {
			if (blogPosts[i].id === postId) {
				const commentedPost = blogPosts[i];
				commentedPost.comments.push(comment);
				newArray.push(commentedPost);
			}
			else {
				newArray.push(blogPosts[i]);
			}
		}
		setBlogPosts(newArray);
	};

	const deleteComment = (postId, commentId) => {
		const newArray = [];
		for (let i = 0; i < blogPosts.length; i++) {
			if (blogPosts[i].id === postId) {
				const updatedPost = { ...blogPosts[i] };
				updatedPost.comments = updatedPost.comments.filter(comment => comment.id !== commentId);
				newArray.push(updatedPost);
			}
			else {
				newArray.push(blogPosts[i]);
			}
		}
		setBlogPosts(newArray);
	};

	return (
		<Switch>
			<Route exact path="/">
				<BlogHome blogPosts={blogPosts} />
			</Route>
			<Route exact path="/new">
				<NewPostForm addPost={addPost} />
			</Route>
			<Route exact path="/posts/:postId">
				<PostDetail
					blogPosts={blogPosts}
					updatePost={updatePost}
					deletePost={deletePost}
					addComment={addComment}
					deleteComment={deleteComment}
				/>
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
