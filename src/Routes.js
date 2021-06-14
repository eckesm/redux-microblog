// import React, { useState } from 'react';
import React from 'react';
// import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import BlogHome from './BlogHome';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';

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
				<PostDetail />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
