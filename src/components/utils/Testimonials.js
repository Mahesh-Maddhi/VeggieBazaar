import React from 'react';

import Testimonial from './Testimonial';
import '../../testimonials.css';
const Testimonials = () => {
	return (
		<section class="ftco-section testimony-section">
			<div class="container">
				<div class="row justify-content-center mb-5 pb-3">
					<div class="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
						<span class="subheading">Testimony</span>
						<h2 class="mb-4">Our satisfied customer says</h2>
						<p>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts. Separated
							they live in
						</p>
					</div>
				</div>
				<div class="row ftco-animate fadeInUp ftco-animated">
					<div class="col-md-12">
						<div class="carousel-testimony owl-carousel owl-loaded owl-drag">
							{/* container */}
							<div class="owl-stage-outer">
								<div
									class="owl-stage"
									style={{
										transition: 'all 0s ease 0s',
										width: '2641px',
										// transform: 'translate3d(-960px, 0px, 0px)',
									}}>
									<Testimonial />
									<Testimonial />
									<Testimonial />
									<Testimonial />
								</div>
							</div>
							<div class="owl-nav disabled">
								<button role="presentation" class="owl-prev">
									<span class="ion-ios-arrow-back"></span>
								</button>
								<button role="presentation" class="owl-next">
									<span class="ion-ios-arrow-forward"></span>
								</button>
							</div>
							<div class="owl-dots">
								<button class="owl-dot">
									<span></span>
								</button>
								<button class="owl-dot">
									<span></span>
								</button>
								<button class="owl-dot active">
									<span></span>
								</button>
								<button class="owl-dot">
									<span></span>
								</button>
								<button class="owl-dot">
									<span></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
