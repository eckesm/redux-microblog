import React from 'react';
import { Link } from 'react-router-dom';
import './PostSummary.css'

const PostSummary = ({ id, title, description }) => {
	return (
		<div className='PostSummary'>
			<Link to={`/posts/${id}`}>
				<h3>{title}</h3>
			</Link>
			<h5>{description}</h5>
		</div>
	);
};

export default PostSummary;
