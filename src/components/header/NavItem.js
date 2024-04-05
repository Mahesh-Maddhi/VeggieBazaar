import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
	const { name, path } = props.details;
	return (
		<li className="nav-item">
			<NavLink className="nav-link" activeClassName="active" to={path}>
				{name}
			</NavLink>
		</li>
	);
};

export default NavItem;
