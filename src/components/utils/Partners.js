import React from 'react';

const partnerImageUrls = [
	'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/sam-agri-partner.png',
	'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/farm-plex-partner.jpeg',
	'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/kisan-konnect-partner.jpeg',
	'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/sarita-agro-product-pvt-ltd-partner.png',
	'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/eco-fresh-organics-partner.jpeg',
];
const Partners = () => {
	return (
		<section className="partners-section mt-5">
			<h3 className="heading text-center">our Partners</h3>
			<ul className="row partners-list">
				{partnerImageUrls.map((imageUrl, index) => (
					<li
						className="col-6 col-sm-4 col-md-3 col-lg-2"
						key={index}>
						<img
							className="partner-image"
							src={imageUrl}
							alt="partner"
							loading="lazy"
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Partners;
