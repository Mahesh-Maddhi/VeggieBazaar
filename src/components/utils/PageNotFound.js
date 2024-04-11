import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
	return (
		<div className="page-not-found">
			<h1>404 Page Not Found</h1>
			<p>
				{' '}
				Go to <Link to="/">Home</Link>
			</p>
		</div>
	);
};

export default PageNotFound;
