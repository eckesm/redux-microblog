import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BlogHome from './BlogHome';
import NewPostForm from './NewPostForm';
import Post from './Post';

const Routes = () => {

	return (
		<Switch>
			<Route exact path="/">
				<BlogHome />
			</Route>
			<Route exact path="/new">
				<NewPostForm />
			</Route>
			<Route exact path="/posts/:postId">
				<Post />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
