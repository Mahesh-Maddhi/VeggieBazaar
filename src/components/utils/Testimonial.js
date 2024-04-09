import React from 'react';
import '../../testimonials.css';
const Testimonial = () => {
	return (
		<>
			<div
				class="owl-item cloned active centered"
				style={{ width: '210px', marginRight: '30px' }}>
				<div class="item">
					<div class="testimony-wrap p-4 pb-5">
						<div
							class="user-img mb-5"
							style={{
								backgroundImage:
									"url('https://ik.imagekit.io/maheshmaddhi/veggieBazaar/person_1.jpg.webp')",
								backgroundSize: 'contain',
							}}>
							<span class="quote d-flex align-items-center justify-content-center">
								<i className="fa-solid fa-quote-right"></i>
							</span>
						</div>
						<div class="text text-center">
							<p class="mb-5 pl-4 line">
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
							<p class="name">Garreth Smith</p>
							<span class="position">UI Designer</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
