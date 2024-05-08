import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { requestServer } from '../utils';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
const Login = () => {
	const navigate = useNavigate();
	console.log('rendered');
	useEffect(() => {
		const isLoggedIn = Cookies.get('isLoggedIn') === 'true' ? true : false;

		if (isLoggedIn) {
			navigate('/');
		}
	});

	const defaultUser = {
		email: '',
		password: '',
	};
	const [user, setUser] = useState(defaultUser);
	const [isPassword, setIsPassword] = useState(false);

	const HandleOnChange = (target) => {
		let newUser = { ...user, [target.name]: target.value };
		setUser(newUser);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (user.email && user.password) {
			const options = {
				method: 'POST',
				body: JSON.stringify(user),
			};
			const responsedata = await requestServer('/login', options);
			console.log('res', responsedata);
			if (responsedata) {
				toast.success(responsedata.message);
				navigate('/');
			} else if (responsedata?.message)
				toast.success(responsedata.message);
			else toast.error('Something went wrong!');
		}

		e.target.reset();
		setUser(defaultUser);
	};
	const toggleEyeButton = () => {
		setIsPassword(!isPassword);
		let passwordEl = document.getElementById('password');
		passwordEl.type = isPassword ? 'password' : 'text';
	};
	return (
		<section className="login-section">
			<div className="login-container">
				<div className="col-12 col-lg-6">
					<div className="login-image-container ">
						<img
							className="login-image"
							src="https://ik.imagekit.io/maheshmaddhi/veggieBazaar/laptop-1.jpg"
							alt="login"
							loading="lazy"
						/>
					</div>
				</div>
				<div className="col-12 col-lg-6 row justify-content-center">
					<form className="login-form  " onSubmit={handleSubmit}>
						<h2>Login</h2>
						<label htmlFor="loginEmail" className="label">
							Email
						</label>
						<input
							type="text"
							className="input-field"
							placeholder="Enter your email address"
							name="email"
							onChange={(e) => HandleOnChange(e.target)}
							value={user.email}
							required
						/>

						<label htmlFor="loginPassword" className="label">
							Password
						</label>
						<div className="eye-icon-div">
							<input
								id="password"
								type="password"
								className="input-field"
								placeholder="Enter your password"
								name="password"
								onChange={(e) => HandleOnChange(e.target)}
								value={user.password}
								required
							/>
							{!isPassword ? (
								<i
									className="fa-solid fa-eye"
									onClick={toggleEyeButton}></i>
							) : (
								<i
									className="fa-solid fa-eye-slash"
									onClick={toggleEyeButton}></i>
							)}
						</div>

						<div>
							<button type="submit">Login</button>
							<Link to="/signup">Create new account</Link>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;
