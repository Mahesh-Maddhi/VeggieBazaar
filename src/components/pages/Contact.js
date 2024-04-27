import React from 'react';
import { Banner, GoogleMap, requestServer } from '../utils';
import { toast } from 'react-toastify';

const Contact = () => {
	const bannerDetails = {
		section: 'Contact',
		title: 'Contact Us',
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = {
			name: e.target.elements.userName.value.trim(),
			email: e.target.elements.userEmail.value.trim(),
			subject: e.target.elements.subject.value.trim(),
			message: e.target.elements.message.value.trim(),
		};
		// console.log("form-data :", formData);
		// connect to db here
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		};
		console.log('options :', options);
		const sendMessages = await requestServer(
			'/contact/addMessage',
			options,
		);
		// console.log("sendMsg :", sendMessages);

		const notify = () => toast.success(sendMessages?.message);
		notify();
		e.target.reset();
	};

	return (
		<div className="contact-section">
			<Banner {...bannerDetails} />
			<div className="container">
				<div className="row  my-5">
					<div className="col-sm-10 col-md-5 col-lg-3  ">
						<div className="card ">
							<p>
								<span>Address:</span> 1-11, Secundrabad,
								Hyderabad, 500007, Telangana, India.
							</p>
						</div>
					</div>
					<div className=" col-sm-10 col-md-5 col-lg-3 ">
						<div className="card">
							<p>
								<span>Mobile:</span> +91 9876543210
							</p>
						</div>
					</div>
					<div className=" col-sm-10 col-md-5 col-lg-3 ">
						<div className="card ">
							<p>
								<span>Email:</span> mahesh@veggiebazaar.co.in
							</p>
						</div>
					</div>
					<div className="  col-sm-10 col-md-5 col-lg-3 ">
						<div className="card ">
							<p>
								<span>Website:</span>{' '}
								https://helpdesk.veggiebazaar.com
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container ">
				<div className="map-form-card row justify-content-between g-5">
					<div className="map  col-lg-6 ">
						<GoogleMap />
					</div>
					<form
						className="form form-bg p-5 rounded-lg col-lg-6"
						onSubmit={(e) => handleSubmit(e)}>
						<div className="mb-3">
							<input
								type="text"
								className="form-control py-4"
								name="userName"
								id="userName"
								aria-describedby="helpId"
								placeholder="Your Name"
								// required
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								className="form-control  py-4"
								name="userEmail"
								id="userEmail"
								aria-describedby="helpId"
								placeholder="Your Email"
								// required
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								className="form-control py-4"
								name="subject"
								id="subject"
								aria-describedby="helpId"
								placeholder="Subject"
								// required
							/>
						</div>
						<div className="mb-3">
							<textarea
								className="form-control"
								name="message"
								id="message"
								rows="9"
								placeholder="Message"
								// required
							></textarea>
						</div>
						<button
							type="submit"
							className="button button-text py-3 px-5 mt-4">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
