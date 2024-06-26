import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Testimonial from './Testimonial';

const testimonials = [
	{
		name: 'Sai Reddy',
		review: "The vegetables I received were incredibly fresh and flavorful. I'm impressed with the quality and prompt delivery!",
		imageUrl: 'https://avatars.githubusercontent.com/u/75177691?v=4',
	},

	{
		name: 'Mahesh Kummari',
		review: 'This website makes vegetable shopping so convenient! The user-friendly interface and quick delivery are unbeatable.',
		imageUrl: 'https://avatars.githubusercontent.com/u/136167735?v=4',
	},
	{
		name: 'Mahesh Maddhi',
		review: "I love the eco-friendly packaging used by this website. It's great to see a company that cares about the environment!",
		imageUrl: 'https://avatars.githubusercontent.com/u/110802391?v=4',
	},
	{
		name: 'Prasad Madigela',
		review: 'This website makes vegetable shopping so convenient! The user-friendly interface and quick delivery are unbeatable.',
		imageUrl: 'https://avatars.githubusercontent.com/u/160470088?v=4',
	},
	{
		name: 'Satish',
		review: "The vegetables I received were incredibly fresh and flavorful. I'm impressed with the quality and prompt delivery!",
		imageUrl:
			'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/default-user-grey.webp',
	},
];
const responsiveOptions = {
	0: {
		items: 1,
		nav: true,
	},
	768: {
		items: 3,
		nav: false,
	},
	1200: {
		items: 4,
		nav: true,
		loop: true,
	},
	2000: {
		items: 5,
		nav: true,
		loop: true,
	},
};

const Testimonials = () => {
	return (
		<section className="testimony-section">
			<div className="container">
				<div className="row justify-content-center mb-5 pb-3">
					<div className="col-md-7 heading-section text-center">
						<span className="our-products-sub-heading">
							Testimony
						</span>
						<h2 className="mb-4">Our satisfied customer says</h2>
						<p>
							Explore glowing reviews about our fresh veggies,
							easy shopping experience, and outstanding service.
							Dive into why customers keep choosing us!
						</p>
					</div>
				</div>
				<div className="row">
					<OwlCarousel
						className="owl-theme"
						loop
						margin={10}
						nav
						responsive={responsiveOptions}>
						{testimonials.map((testimonial, index) => {
							return <Testimonial {...testimonial} key={index} />;
						})}
					</OwlCarousel>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
