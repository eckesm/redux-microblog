import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { voteOnPost } from './actions';
import Voting from './Voting';
import './PostSummary.css';

const PostSummary = ({ id, title, description, votes }) => {
	const dispatch = useDispatch();
	let [ postVotes, setPostVotes ] = useState(votes);
	
	const voteOnThisPost = direction => {
		if (direction === 'up') {
			setPostVotes(postVotes + 1);
		}
		else {
			setPostVotes(postVotes - 1);
		}

		dispatch(voteOnPost(id, direction));
	};

	return (
		<div className="PostSummary">
			<Link to={`/posts/${id}`}>
				<h3>{title}</h3>
			</Link>
			<h5>{description}</h5>
			<Voting votes={postVotes} voteOnThisPost={voteOnThisPost} />
		</div>
	);
};

export default PostSummary;
