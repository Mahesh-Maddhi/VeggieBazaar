import React from 'react';

const DealOfTheDay = () => {
	return (
		<section className="deal-of-the-day-section">
			<div className="deal-div">
				<p className="our-products-sub-heading">Best price for you</p>
				<h2 className="our-products-heading">Deal of the day</h2>
				<p className="our-products-description">
					Fresh Spinach! Versatile and nutritious, perfect for salads,
					smoothies, and sautés. Don't miss out on this healthy offer!
				</p>
				<p className="our-products-sub-heading">
					Spinach <br />
					<span>
						<span className="price align">
							<strong style={{ fontSize: '25px' }}>₹60 </strong>
						</span>
						now <strong style={{ fontSize: '30px' }}>₹35</strong>{' '}
						only
					</span>
				</p>
			</div>
		</section>
	);
};

export default DealOfTheDay;
