import React from 'react';
import { Modal, Partners, Testimonials } from '../utils';
const About = () => {
	return (
		<section className="about-section">
			<Partners />
			<Testimonials />
			<Modal />
		</section>
	);
};

export default About;
