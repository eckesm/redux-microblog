import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { v4 as uuid } from 'uuid';
import './NewPostForm.css';
import { addComment } from './actions';

const NewCommentForm = ({ postId }) => {
	let INITIAL_STATE = {
		text : '',
		// id      : uuid()
		post_id   : postId
	};
	const dispatch = useDispatch();
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
		// dispatch(addComment(postId, formData));
		dispatch(addComment(formData));
		setFormData(INITIAL_STATE);
	};

	return (
		<form className="NewCommentForm" onSubmit={handleSubmit}>
			<div className="NewCommentForm-input_group">
				<input
					type="text"
					name="text"
					id="text"
					placeholder="New Comment"
					value={formData.text}
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
