import React from 'react';
import Partners from './Partners';
import Address from './Address';
import Social from './Social';
const Footer = () => {
	return (
		<>
			<Partners />
			<footer className="footer">
				<section className="row">
					<div className="col-12col-md-6 col-lg-3">
						<Social />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Address />
					</div>
				</section>
			</footer>
		</>
	);
};

export default Footer;
