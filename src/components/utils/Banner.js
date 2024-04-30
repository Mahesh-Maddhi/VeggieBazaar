import React from 'react';
import { Link } from 'react-router-dom';
const Banner = (props) => {
	const {
		section,
		title,
		bgImageUrl = 'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/bg/veggies-bg.jpg',
	} = props;
	return (
		<section className="banner-section ">
			<div
				className="row banner align-items-center justify-content-center"
				style={{
					backgroundImage: `url("${bgImageUrl}")`,
				}}>
				<div className="col-md-9 text-center  text-white">
					<p className="text-white ">
						<span className="mr-2">
							<Link
								to="/"
								className="text-decoration-none text-white font-weight-bold ">
								Home
							</Link>
						</span>{' '}
						<span className="font-weight-bold">{section}</span>
					</p>
					<h1 className="">{title}</h1>
				</div>
			</div>
		</section>
	);
};

export default Banner;
