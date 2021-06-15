import React from 'react';

const Voting = ({ votes, voteOnThisPost }) => {

	let votesText = '';
	if (votes === 1) {
		votesText = '1 vote';
	}
	else {
		votesText = `${votes} votes`;
	}

	return (
		<div>
			<p>{votesText}</p>
			<button onClick={() => voteOnThisPost('up')}>up</button>
			<button onClick={() => voteOnThisPost('down')}>down</button>
		</div>
	);
};

export default Voting;
