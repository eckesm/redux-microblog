import React from 'react';
import PostsList from './PostsList';

const BlogHome = ({ blogPosts }) => {
	return (
		<div>
			<h3>Welcome to Microblog, our innovative site for communicating on the information superhighway.</h3>
			<PostsList blogPosts={blogPosts} />
		</div>
	);
};

export default BlogHome;
