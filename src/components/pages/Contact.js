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
	<div className='map-form-card'>
		<div className='map'>
			
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.9873273928997!2d78.47378622908118!3d17.416975651200744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975801aff093%3A0x4c47ef6c115b0424!2sBuddha%20Statue!5e0!3m2!1sen!2sin!4v1712506901218!5m2!1sen!2sin"
			style={{width:"1200", height:"950", style:"border:0",}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	</div>
	</>
};

export default Contact;
