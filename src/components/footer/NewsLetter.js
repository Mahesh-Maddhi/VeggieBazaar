import React from 'react';

const NewsLetter = () => {
	return (
		<section className="news-letter-secction">
			<div className="col-12 col-sm-12 col-md-12 col-lg-6">
				<h4>Subscribe to our Newsletter</h4>
				<p>Get e-mail updates about our latest shops and special offers</p>
			</div>
			<form
				className="email-button row col-12 col-sm-12 col-md-12 col-lg-6"
				onSubmit={(e) => e.preventDefault()}>
				<input type="email" placeholder="Enter email address" />
				<button type="submit">subscribe</button>
			</form>
		</section>
	);
};

export default NewsLetter;
