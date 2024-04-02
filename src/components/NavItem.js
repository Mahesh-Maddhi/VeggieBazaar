import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
	const { name, path } = props.details;
	console.log(props.details);
	return (
		<li className={(e) => (e.isActive ? 'nav-item active' : 'nav-item')}>
			<NavLink className="nav-link" to={path}>
				{name} <span className="sr-only">(current)</span>
			</NavLink>
		</li>
	);
};

export default NavItem;
