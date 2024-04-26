import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Categories, DealOfTheDay } from '../utils';
const Home = () => {
	const [isLogin, setIsLogin] = useState(false);
	useEffect(() => {
		const token = localStorage.getItem('auth_token');

		if (token) {
			setIsLogin(true);
		}
	}, []);

	return (
		<div>
			<section className="home-section">
				<h1 className="welcome-heading">
					Welcome to <span>Veggie Bazaar</span>!!!...
				</h1>
				{!isLogin ? (
					<p className="welcome-para">
						Please <Link to="/login">Login</Link> to Shop and access the all
						features.
					</p>
				) : (
					<p className="fadeIn">
						<Link className="primary-button text-white btn">Shop now</Link>
					</p>
				)}
			</section>
			<Categories />
			<DealOfTheDay />
		</div>
	);
};

export default Home;
