import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Categories, DealOfTheDay } from '../utils';

const services = [
	{
		title: 'Free Shipping',
		icon: 'truck-arrow-right',
		description: 'On order over $100',
		backgroundColor: 'info',
	},
	{
		title: 'Always Fresh',
		icon: 'carrot',
		description: 'Product Well Packed',
		backgroundColor: 'warning',
	},
	{
		title: 'Superior Quality',
		icon: 'medal',
		description: 'Quality Products',
		backgroundColor: 'success',
	},
	{
		title: 'Support',
		icon: 'headset',
		description: '24/7 Support',
		backgroundColor: 'secondary',
	},
];
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
					Welcome to <span>Veggie Bazaar</span>
					!!!...
				</h1>
				{!isLogin ? (
					<p className="welcome-para">
						Please <Link to="/login">Login</Link> to Shop and access
						the all features.
					</p>
				) : (
					<p className="fadeIn">
						<Link
							to={'/shop'}
							className="category-button button btn shop-now-btn">
							Shop now
						</Link>
					</p>
				)}
			</section>
			<section class="services-section">
				<div class="container">
					<div class="row py-5">
						{services.map((service) => {
							return (
								<div class="col-md-3 text-center d-flex align-self-stretch ">
									<div class="media services mb-md-0 mb-4 border py-4 px-3 rounded shadow">
										<div
											class={`icon active d-flex justify-content-center align-items-center mb-2 bg-${service.backgroundColor}`}>
											<span
												class={`fa-solid fa-${service.icon}`}></span>
										</div>
										<div class="media-body">
											<h3 class="heading">
												{service.title}
											</h3>
											<span>{service.description}</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<Categories />
			<DealOfTheDay />
		</div>
	);
};

export default Home;
