import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../utils';
import NavItem from './NavItem';
import { useSelector } from 'react-redux';
const navItems = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/about' },
	{ name: 'Shop', path: '/shop' },
	{ name: 'Contact', path: '/contact' },
];
const Navbar = () => {
	const cartItemsCount = useSelector(
		(state) => state.cartItemsCount.Itemscount,
	);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
			<Link to="/" className="navbar-brand">
				VeggieBazaar
			</Link>

			<div className="d-flex align-items-center">
				<div className="items mr-3 d-lg-none">
					<Link
						to="/dashboard"
						className="fa-solid fa-user icon mx-3 "
						style={{ color: '#ad6f8c' }}></Link>
					<Link to="/cart" className="fa-solid fa-cart-shopping icon">
						<span className="cart-items-count">
							{cartItemsCount}
						</span>
					</Link>
				</div>

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
			</div>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					{navItems.map((navItem) => (
						<NavItem details={navItem} key={navItem.name} />
					))}
				</ul>
				<Search />
				<div className="items d-none d-lg-block">
					<Link
						to="/dashboard"
						className="fa-solid fa-user icon mx-3 "
						style={{ color: '#ad6f8c' }}></Link>
					<Link to="/cart" className="fa-solid fa-cart-shopping icon">
						<span className="cart-items-count">
							{cartItemsCount}
						</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
