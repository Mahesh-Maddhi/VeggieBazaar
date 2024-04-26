import React from 'react';

const DeveloperCard = (props) => {
	const { title, imageUrl, description, role } = props;
	return (
		<div className="developer-card">
			<img src={imageUrl} alt={title} className="developer-photo" />
			<div className="details ml-3">
				<h2 className="developer-title">{title}</h2>
				<p className="developer-description">{description}</p>
				<h3 className="developer-role">{role}</h3>
			</div>
		</div>
	);
};

export default DeveloperCard;
