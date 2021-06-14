import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPost, updatePost } from './actions';
import './NewPostForm.css';

const NewPostForm = ({ postId }) => {
	const dispatch = useDispatch();
	const { posts } = useSelector(store => store);

	let INITIAL_STATE = {
		title       : '',
		description : '',
		body        : ''
	};
	if (postId) {
		INITIAL_STATE = {
			id          : posts[postId].id,
			title       : posts[postId].title,
			description : posts[postId].description,
			body        : posts[postId].body
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
		if (!postId) {
			dispatch(addPost(formData));
		}
		else {
			dispatch(updatePost(formData));
		}
		history.push('/');
	};

	const clickCancel = () => {
		history.push('/');
	};

	return (
		<form className="NewPostForm" onSubmit={handleSubmit}>
			{!postId && <h1>New Post</h1>}
			{postId && <h1>Edit Post</h1>}

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
				{!postId && (
					<button className="NewPostForm-button" type="submit">
						Save
					</button>
				)}
				{postId && (
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
