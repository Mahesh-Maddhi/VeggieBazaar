import React from 'react';
import { Partners, ShowProducts } from '../utils';

const About = () => {
	return (
		<section className="about-section">
			<div>About</div>
			<ShowProducts />
			<Partners />
		</section>
	);
};

export default About;
