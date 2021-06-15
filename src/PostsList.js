import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitles } from './actions';
import PostSummary from './PostSummary';
import './PostsList.css';

const PostsList = () => {
	const { titles } = useSelector(store => store);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchTitles());
		},
		[ dispatch ]
	);

	return (
		<div className="PostsList">
			{titles.map(post => (
				<PostSummary key={post.id} 
				id={post.id} title={post.title} description={post.description} votes={post.votes} />
			))}
		</div>
	);
};

export default PostsList;
