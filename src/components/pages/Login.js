import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const toggleEyeButton = (e) => {
		const element = e.target;
		element.classList.toggle('fa-eye');
		element.classList.toggle('fa-eye-slash');
	};
	return (
		<section className="login-section">
			<div className="login-container">
				<div className="login-image-container col-12 col-lg-6">
					<img
						className="login-image"
						src="https://ik.imagekit.io/maheshmaddhi/veggieBazaar/laptop-1.jpg"
						alt="login"
						loading="lazy"
					/>
				</div>
				<form className="login-form  col-12 col-lg-6" onSubmit={handleSubmit}>
					<h2>Login</h2>
					<label htmlFor="loginEmail" className="label">
						Email
					</label>
					<input
						type="text"
						className="input-field"
						placeholder="Enter your email address"
						required
					/>

					<label htmlFor="loginPassword" className="label">
						Password
					</label>
					<div className="eye-icon-div">
						<input
							type="password"
							className="input-field"
							placeholder="Enter your password"
							required
						/>
						<i className="fa-solid fa-eye" onClick={toggleEyeButton}></i>
					</div>

					<div>
						<button type="submit" id="loginButton">
							Login
						</button>
						<Link to="/signup">Create new account</Link>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
