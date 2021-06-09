import React from 'react';
import PostSummary from './PostSummary';
import './PostsList.css'

const PostsList = ({ blogPosts }) => {
	return (
		<div className='PostsList'>
			{blogPosts.map(post => (
				<PostSummary key={post.id} id={post.id} title={post.title} description={post.description} />
			))}
		</div>
	);
};

export default PostsList;
