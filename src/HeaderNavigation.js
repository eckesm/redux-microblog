import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNavigation.css';

const HeaderNavigation = () => {
	return (
		<div className="HeaderNavigation">
			<h1>Microblog</h1>
			<h5>Get in the Rithm of blogging!</h5>
			<div>
				<Link className="HeaderNavigation-link" to="/">
					Blog
				</Link>
				<Link className="HeaderNavigation-link" to="/new">
					Add a new post
				</Link>
			</div>
		</div>
	);
};

export default HeaderNavigation;
