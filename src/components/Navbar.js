import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import NavItem from './NavItem';
const navItems = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/about' },
	{ name: 'Contact', path: '/contact' },
];
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link to="/" className="navbar-brand">
				Mahesh
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					{navItems.map((navItem) => (
						<NavItem details={navItem} key={navItem.name} />
					))}
				</ul>
				<Search />
			</div>
		</nav>
	);
};

export default Navbar;
