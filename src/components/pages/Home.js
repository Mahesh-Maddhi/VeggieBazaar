import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<section className="home-section">
			<h1 className="welcome-heading">
				Hey Hiii!, Welcome to <span>Veggie Bazaar</span>!!!...
			</h1>
			<p className="welcome-para">
				Please <Link to="/login">Login</Link> to Shop and access the all
				features.
			</p>
		</section>
	);
};

export default Home;
