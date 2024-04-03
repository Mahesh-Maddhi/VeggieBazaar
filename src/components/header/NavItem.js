import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
	const { name, path } = props.details;
	return (
		<li
			className={((e) => (e.isActive ? 'nav-item active' : 'nav-item')) || ''}>
			<NavLink className="nav-link" to={path}>
				{name}
			</NavLink>
		</li>
	);
};

export default NavItem;
