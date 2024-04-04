import React from 'react';

const Menu = () => {
	return (
		<section className="menu-section">
			<div className="menu-card">
				<h5>Menu</h5>
				<ul className="menu">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/shop">Shop</a>
					</li>
					<li>
						<a href="/contact">Contact Us</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Menu;
