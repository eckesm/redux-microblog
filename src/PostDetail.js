import React from 'react';
import Voting from './Voting';

const PostDetail = ({ post, updateThisPost, deleteThisPost, voteOnThisPost }) => {
	const { title, description, body, votes } = post;

	return (
		<div>
			<h3>{title}</h3>
			<h5>{description}</h5>
			<p>{body}</p>
			<div>
				<button onClick={updateThisPost}>Edit</button>
				<button onClick={deleteThisPost}>Delete</button>
			</div>

			<Voting votes={votes} voteOnThisPost={voteOnThisPost} />
			
		</div>
	);
};

export default PostDetail;
