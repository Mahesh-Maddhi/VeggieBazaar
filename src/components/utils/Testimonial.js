import React from 'react';
import '../../testimonials.css';
const Testimonial = ({ name, review, imageUrl }) => {
	return (
		<>
			<div className="item">
				<div className="testimony-wrap p-4 pb-5">
					<div
						className="user-img mb-5"
						style={{
							backgroundImage: `url(${imageUrl})`,
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
							backgroundPositionX: 'center',
						}}></div>
					<div className="text text-center">
						<p className="mb-5 pl-4 line">{review}</p>
						<p className="name">{name}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
