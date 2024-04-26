import React from 'react';
import { Banner, DeveloperCard, Partners, Testimonials } from '../utils';
const About = () => {
	const bannerDetails = {
		section: 'About',
		title: 'About Us',
	};

	const developers = [
		{
			title: 'Mahesh Maddhi',
			imageUrl: 'https://avatars.githubusercontent.com/u/110802391?v=4',
			description:
				' MERN Stack developer with strong expertise in Express.js, React.js, and Node.js, MongoDB. Passionate about building scalable applications and ensuring efficient communication between front-end and back-end.Role: MERN Stack Engineer',
			role: 'Full Stack Developer',
		},
		{
			title: 'Mahesh Kummari',
			imageUrl: 'https://avatars.githubusercontent.com/u/136167735?v=4',
			description:
				'Full-stack developer skilled in front-end and back-end technologies. Enjoys creating complete software solutions with a focus on user-friendly interfaces and robust server-side operations.Role: Full Stack Software Engineer.',
			role: 'Full Stack Developer',
		},
	];

	return (
		<section className="about-section">
			<Banner {...bannerDetails} />
			<div className="developers">
				<h1 className="text-center m-2">Our Team</h1>
				{developers.map((developer) => {
					return <DeveloperCard {...developer} key={developer.title} />;
				})}
			</div>

			<Testimonials />
			<Partners />
		</section>
	);
};

export default About;
