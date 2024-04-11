import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
	return (
		<section className="banner-section ">
			<div
				className="row banner align-items-center justify-content-center"
				style={{
					backgroundImage:
						'url("https://ik.imagekit.io/maheshmaddhi/veggieBazaar/bg/veggies-bg.jpg")',
				}}>
				<div className="col-md-9 text-center  text-white">
					<p className="text-white ">
						<span className="mr-2">
							<Link to="/home" className="text-decoration-none text-white">
								Home
							</Link>
						</span>{' '}
						<span className="">Cart</span>
					</p>
					<h1 className="">My Cart</h1>
				</div>
			</div>
		</section>
	);
};

export default Banner;
