import React from 'react';
import { useSelector } from 'react-redux';
import PostSummary from './PostSummary';
import './PostsList.css';

const PostsList = () => {
	const { posts } = useSelector(store => store);
	return (
		<div className="PostsList">
			{Object.keys(posts).map(id => (
				<PostSummary key={id} id={id} title={posts[id].title} description={posts[id].description} />
			))}
		</div>
	);
};

export default PostsList;
