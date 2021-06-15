import React from 'react';

const Comments = ({ comments, deleteAComment }) => {
	return (
		<div>
			<h4>Comments</h4>
			{comments.map(comment => (
				<div key={comment.id}>
					<p>{comment.text}</p>
					<button onClick={() => deleteAComment(comment.id)}>x</button>
				</div>
			))}
		</div>
	);
};

export default Comments;
