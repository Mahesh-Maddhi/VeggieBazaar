import React from 'react';
import {NavLink} from 'react-router-dom';

const Contact = () => {
	return <>
	<div className='contact-landing-image-card'>
		<div className='home-contact-card'>
		<p><NavLink className='contact-nav-link para' to={'/'}>
			Home
		</NavLink>
		</p>
		<p className='para'>Contact us</p>
		</div>
		<h3 className='contact-heading'>Contact us</h3>
	</div>
	<div className='container'>
		<div className='row  my-5'>
		<div className='col-sm-10 col-md-5 col-lg-3  '>
			<div className='card '>
			<p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
			</div>
			
		</div>
		<div className=' col-sm-10 col-md-5 col-lg-3 '>
			<div className='card'>
			<p><span>Mobile:</span> +91 9949767111</p>
			</div>
			
		</div>
		<div className=' col-sm-10 col-md-5 col-lg-3 '>
			<div className='card '>
			<p><span>Website:</span> http://website.com</p>
			</div>
			
		</div>
		<div className='  col-sm-10 col-md-5 col-lg-3 '>
			<div className='card '>
			<p><span>Website:</span> http://website.com</p>
			</div>
			
		</div>
	</div>

	</div>
	<div className='container '>
		<div className='map-form-card  row '>
			<div className='map col-lg-6 '>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9211601703037!2d78.47239807462756!3d17.41557080199372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975801aff093%3A0x4c47ef6c115b0424!2sBuddha%20Statue!5e0!3m2!1sen!2sin!4v1712681956224!5m2!1sen!2sin" 
			width="550" height="600" style={{border:0}} allowfullscreen="" loading="lazy" 
			referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
			<div className='form form-bg p-5  col-lg-6'>
				<div className="mb-3">
					<input
						type="text"
						className="form-control py-4"
						name="userName"
						id="userName"
						aria-describedby="helpId"
						placeholder="Your Name"
					/>
				</div>
				<div class="mb-3">
					<input
						type="text"
						className="form-control  py-4"
						name="userEmail"
						id="userEmail"
						aria-describedby="helpId"
						placeholder="Your Email"
					/>
				</div>
				<div class="mb-3">
					<input
						type="text"
						className="form-control py-4"
						name="Subject"
						id="Subject"
						aria-describedby="helpId"
						placeholder="Subject"
					/>
				</div>
				<div className="mb-3">
					<textarea className="form-control" name="message" id="message" rows="9" placeholder='Message'></textarea>
				</div>
				<button
					type="button"
					className="button button-text py-3 px-5"
				>
					Send Message
				</button>
			</div>
		</div>
	</div>
	</>
};

export default Contact;
