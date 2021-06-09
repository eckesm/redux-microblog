import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './NewPostForm.css';

const NewPostForm = ({ addPost, updatePost, post }) => {
	let INITIAL_STATE = {
		title       : '',
		description : '',
		body        : '',
		id          : uuid()
	};
	if (post) {
		INITIAL_STATE = {
			title       : post.title,
			description : post.description,
			body        : post.body,
			id          : post.id
		};
	}

	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const history = useHistory();

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(data => ({
			...data,
			[name] : value
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!post) {
			addPost(formData);
		}
		else {
			updatePost(formData);
		}
		history.push('/');
	};

	const clickCancel = () => {
		history.push('/');
	};

	return (
		<form className="NewPostForm" onSubmit={handleSubmit}>
			{!post && <h1>New Post</h1>}
			{post && <h1>Edit Post</h1>}

			<div className="NewPostForm-input_group">
				<label htmlFor="title">Title:</label>
				<input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required />
			</div>
			<div className="NewPostForm-input_group">
				<label htmlFor="description">Description:</label>
				<input
					type="text"
					name="description"
					id="description"
					value={formData.description}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="NewPostForm-input_group">
				<label htmlFor="body">Body:</label>
				<textarea
					type="textarea"
					name="body"
					id="body"
					value={formData.body}
					onChange={handleChange}
					rows="10"
					required
				/>
			</div>
			<div className="NewPostForm-buttons_div">
				{!post && (
					<button className="NewPostForm-button" type="submit">
						Save
					</button>
				)}
				{post && (
					<button className="NewPostForm-button" type="submit">
						Update
					</button>
				)}

				<button className="NewPostForm-button" onClick={clickCancel}>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default NewPostForm;
