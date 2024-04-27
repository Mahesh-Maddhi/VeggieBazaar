import React from 'react';

const Social = () => {
	return (
		<div className="vegefoods-icons-section">
			<div className="veggie-foods">
				<h5>Veggie Bazaar</h5>
				<p>
					Fresh, Flavorful, Local Produce Delivered to Your Table.
					Taste the Difference!
				</p>
			</div>
			<div className="social-icons">
				<a
					className="fa-brands fa-square-facebook icon"
					href="https://www.facebook.com/"
					target="_blank"
					rel="noreferrer">
					{' '}
				</a>
				<a
					className="fa-brands fa-instagram icon"
					href="https://www.instagram.com/"
					target="_blank"
					rel="noreferrer">
					{' '}
				</a>
				<a
					className="fa-brands fa-youtube icon"
					href="https://www.youtube.com/"
					target="_blank"
					rel="noreferrer">
					{' '}
				</a>
				<a
					className="fa-brands fa-x-twitter icon"
					href="https://twitter.com/"
					target="_blank"
					rel="noreferrer">
					{' '}
				</a>
			</div>
		</div>
	);
};

export default Social;
