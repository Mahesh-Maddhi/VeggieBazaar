import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const toggleEyeButton = (e) => {
		e.target.classList.toggle('fa-eye');
		e.target.classList.toggle('fa-eye-slash');
	};
	return (
		<section className="register-section">
			<div className="registration-container">
				<div className="registration-image-container">
					<img
						className="registration-image"
						src="https://ik.imagekit.io/maheshmaddhi/veggieBazaar/laptop.jpg"
						alt="registration"
						loading="lazy"
					/>
				</div>
				<form className="registration-form" onSubmit={handleSubmit}>
					<h2>Registration</h2>
					<label htmlFor="fullName" className="label">
						Full Name
					</label>
					<input
						type="text"
						className="input-field"
						id="fullName"
						placeholder="Enter your full name"
						required
					/>

					<label htmlFor="email" className="label">
						Email
					</label>
					<input
						type="text"
						className="input-field"
						id="email"
						placeholder="Enter your email address"
						required
					/>

					<label htmlFor="password" className="label">
						Password
					</label>
					<input
						type="text"
						className="input-field"
						id="password"
						placeholder="Enter your password"
						required
					/>

					<label htmlFor="conformPasswordRegister" className="label">
						Conform Password
					</label>
					<div className="eye-icon-div">
						<input
							type="password"
							className="input-field"
							id="conformPasswordRegister"
							placeholder="Conform your password"
							required
						/>
						<i className="fa-solid fa-eye " onClick={toggleEyeButton}></i>
					</div>

					<label htmlFor="mobile" className="label">
						Mobile Number
					</label>
					<input
						type="text"
						className="input-field"
						id="mobile"
						placeholder="Enter your mobile number"
						required
					/>

					<div>
						<button type="submit">Register</button>
						<Link to="/login">Have an account LOGIN</Link>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Signup;
