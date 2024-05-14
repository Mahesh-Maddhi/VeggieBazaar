import React from 'react';
import { Link } from 'react-router-dom';

const DeveloperCard = (props) => {
	const { title, imageUrl, description, role, link } = props;
	return (
		<div className="developer-card">
			<img src={imageUrl} alt={title} className="developer-photo" />
			<div className="details ml-3">
				<h2 className="developer-title text-center">{title}</h2>
				<p className="developer-description">{description}</p>
				<h3 className="developer-role ">{role}</h3>
				<Link
					className="link text-decoration-none font-weight-bold text-monospace"
					target="_blank"
					to={link}>
					Visit Portfolio{' '}
					<i
						className="fa-solid fa-up-right-from-square"
						style={{ fontSize: '80%' }}></i>
				</Link>
			</div>
		</div>
	);
};

export default DeveloperCard;
