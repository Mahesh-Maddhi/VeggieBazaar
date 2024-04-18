import React, { useState } from 'react';
import { requestServer } from '../utils';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
		confirmPassword: '',
		mobile: '',
	});

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		};
		console.log(options);
		const responsedata = await requestServer('/addUser', options);
		console.log('res', responsedata);
		const notify = () => toast.success(responsedata.message);
		notify();
		navigate('/login');

		e.target.reset();
	};

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
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
						name="fullName"
						placeholder="Enter your full name"
						value={formData.fullName}
						onChange={handleInputChange}
						required
					/>

					<label htmlFor="email" className="label">
						Email
					</label>
					<input
						type="email"
						className="input-field"
						id="email"
						name="email"
						placeholder="Enter your email address"
						value={formData.email}
						onChange={handleInputChange}
						required
					/>

					<label htmlFor="password" className="label">
						Password
					</label>
					<div className="eye-icon-div">
						<input
							type="text"
							className="input-field"
							id="password"
							name="password"
							placeholder="Enter your password"
							value={formData.password}
							onChange={handleInputChange}
							required
						/>
					</div>

					<label htmlFor="confirmPassword" className="label">
						Confirm Password
					</label>
					<div className="eye-icon-div">
						<input
							type={isPasswordVisible ? 'text' : 'password'}
							className="input-field"
							id="confirmPassword"
							name="confirmPassword"
							placeholder="Confirm your password"
							value={formData.confirmPassword}
							onChange={handleInputChange}
							required
						/>
						<i
							className={
								isPasswordVisible ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
							}
							onClick={togglePasswordVisibility}></i>
					</div>

					<label htmlFor="mobile" className="label">
						Mobile Number
					</label>
					<input
						type="tel"
						className="input-field"
						id="mobile"
						name="mobile"
						placeholder="Enter your mobile number"
						value={formData.mobile}
						onChange={handleInputChange}
						required
					/>

					<div>
						<button type="submit">Register</button>
						<Link to="/login">Have an account? Login</Link>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Signup;
