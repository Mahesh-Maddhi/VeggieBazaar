import React from 'react';
import Partners from './Partners';
import Address from './Address';
import Social from './Social';
import QuickLinks from './QuickLinks';
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
						<QuickLinks />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Address />
					</div>
				</section>
				<hr />
				<section>
					<p className="copyright">
						{' '}
						&copy; 2024 VeggieBazaar. All rights reserved
					</p>
					<div className="credits">
						<p className="text-right">
							Designed and Developed by &#10084;
							<a
								href="https://mahesh-maddhi.github.io/my-portfolio/"
								target="_blank">
								Mahesh Maddhi
							</a>
							and
							<a href="https://github.com/Mahesh-Kummari" target="_blank">
								Mahesh Kummari
							</a>
						</p>
					</div>
				</section>
			</footer>
		</>
	);
};

export default Footer;
