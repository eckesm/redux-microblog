import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewPostForm.css';

const NewCommentForm = ({ addComment, postId }) => {
	let INITIAL_STATE = {
		comment : '',
		id      : uuid()
	};

	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(data => ({
			...data,
			[name] : value
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		addComment(postId, formData);
		setFormData(INITIAL_STATE);
	};

	return (
		<form className="NewCommentForm" onSubmit={handleSubmit}>
			<div className="NewCommentForm-input_group">
				<input
					type="text"
					name="comment"
					id="comment"
					placeholder="New Comment"
					value={formData.comment}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="NewCommentForm-buttons_div">
				<button className="NewCommentForm-button" onClick={handleSubmit}>
					Add
				</button>
			</div>
		</form>
	);
};

export default NewCommentForm;
