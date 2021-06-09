import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
				'Well, to be honest, I am just working on project for this coding bootcamp... and listening to music... while my mom makes dinner in the kitchen.  It is also raining!'
		},
		{
			id          : 'initial2',
			title       : 'My Second Post',
			description : 'Getting ready for my call with Paritosh',
			body        : 'I should really try to finish up some of this project before we chat on Skype later!'
		}
	];

	const [ blogPosts, setBlogPosts ] = useState(INITIAL_STATE);

	const addPost = newPost => {
		setBlogPosts([ ...blogPosts, newPost ]);
	};

	const updatePost = updatedPost => {
		const newBlogPosts = [];
		for (let i = 0; i < blogPosts.length; i++) {
			if (blogPosts[i].id === updatedPost.id) {
				newBlogPosts.push(updatedPost);
			}
			else {
				newBlogPosts.push(blogPosts[i]);
			}
		}
		setBlogPosts(newBlogPosts);
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
				<PostDetail blogPosts={blogPosts} updatePost={updatePost} />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
