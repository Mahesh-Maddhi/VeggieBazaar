import React from 'react';

const Address = () => {
	return (
		<section className="address-section">
			<h5>Have a Question ?</h5>
			<address>
				<a
					className="line"
					href="https://www.google.com/maps/place/Buddha+Statue/@17.4154766,78.4749978,18.67z/data=!4m6!3m5!1s0x3bcb975801aff093:0x4c47ef6c115b0424!8m2!3d17.4155657!4d78.474973!16s%2Fm%2F0m0k5_d?entry=ttu"
					target="_blank"
					rel="noreferrer">
					<i className="fa-solid fa-location-dot"></i>
					<p>1/11 street, Hyderabad, Telangana 500001</p>
				</a>
				<a className="line" href="mailto:maddimahesh111@gmail.com">
					<i className="fa-solid fa-envelope"></i>
					<p>maddimahesh111@gmail.com</p>
				</a>
				<a className="line" href="tel:9133237943">
					<i className="fa-solid fa-phone"></i>
					<p>9133237943</p>
				</a>
			</address>
		</section>
	);
};

export default Address;
