import React from 'react';
import Address from './Address';
import Social from './Social';
import QuickLinks from './QuickLinks';
import Menu from './Menu';
import NewsLetter from './NewsLetter';

const Footer = () => {
	return (
		<>
			<NewsLetter />
			<footer className="footer">
				<section className="row">
					<div className="col-12col-md-6 col-lg-3">
						<Social />
					</div>
					<div className="col-12col-md-4 col-lg-2">
						<Menu />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<QuickLinks />
					</div>
					<div className="col-12 col-md-8 col-lg-4">
						<Address />
					</div>
				</section>
				<hr />
				<section>
					<p className="copyrights">
						&copy; 2024 <span>VeggieBazaar</span>. All rights reserved
					</p>
					<div className="credits">
						<p className="text-right">
							This website is Developed with &#10084; by
							<a
								href="https://mahesh-maddhi.github.io/my-portfolio/"
								target="_blank"
								rel="noopener noreferrer">
								Mahesh Maddhi
							</a>
							and
							<a
								href="https://github.com/Mahesh-Kummari"
								target="_blank"
								rel="noopener noreferrer">
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
