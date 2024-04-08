import React from 'react';
import { Link } from 'react-router-dom';
import { Categories, DealOfTheDay } from '../utils';
const Home = () => {
	return (
		<div>
			<section className="home-section">
				<h1 className="welcome-heading">
					Welcome to <span>Veggie Bazaar</span>!!!...
				</h1>
				<p className="welcome-para">
					Please <Link to="/login">Login</Link> to Shop and access the all
					features.
				</p>
			</section>
			<Categories />
			<DealOfTheDay />
		</div>
	);
};

export default Home;
