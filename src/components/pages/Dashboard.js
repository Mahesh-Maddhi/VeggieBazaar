import React, { useEffect, useState } from 'react';
import { Banner, UserDetails, Address, Logout, requestServer } from '../utils';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Dashboard = () => {
	const bannerDetails = {
		section: 'Dashboard',
		title: 'Dashboard',
	};
	const [userDetails, setUserDetails] = useState({});

	const navigate = useNavigate();

	const token = localStorage.getItem('auth_token');

	const removeAddress = async (id) => {
		if (!token) {
			navigate('/login');
		}
		const newAddresses = userDetails.addresses.filter(
			(address) => address._id !== id,
		);

		setUserDetails((prev) => ({
			...prev,
			addresses: newAddresses,
		}));

		const options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `BEARER ${token}`,
			},
		};
		const response = await requestServer(`/deleteAddress/${id}`, options);
		console.log(response);
		if (response) {
			const notify = () => toast.success(response.message);
			notify();
		}
	};
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		};
		const fetchDetails = async () => {
			const data = await requestServer(`/userDetails`, options);
			// console.log('data', data);
			setUserDetails(data);
		};
		fetchDetails();
	}, [token]);
	console.log('userData', userDetails);

	return (
		<section className="dashboard-section">
			<Banner {...bannerDetails} />
			{token && (
				<div>
					<div className="col-md-12">
						<UserDetails {...userDetails} />
					</div>
					<div className="col-md-12">
						<div className=" p-3 bg-light rounded-lg border-dark">
							<h2 className="">Address</h2>
							<div className="row align-items-center">
								{userDetails?.addresses?.length > 0 &&
									userDetails?.addresses.map((address) => {
										console.log(address);
										return (
											<Address
												{...address}
												removeAddress={removeAddress}
												key={address._id}
											/>
										);
									})}

								<Link
									to="/checkout"
									className="p-6 m-5 shadow d-flex justify-content-center align-items-center add-button rounded-circle">
									<i class="fa-solid fa-plus icon"></i>
								</Link>
							</div>
						</div>
						<div className="m-4">
							<Logout />
						</div>
					</div>
				</div>
			)}
			{!token && (
				<div className="text-center">
					<h3 className="text-center mt-5">
						Hi User Please <strong>Login/Signup</strong> To Access
						Your Details
					</h3>
					<Link
						to="/login"
						className="btn button primary-button px-4 mt-3">
						Login
					</Link>
					<Link
						to="/signup"
						className="btn button primary-button px-4 mt-3 ml-3">
						Sign Up
					</Link>
				</div>
			)}
		</section>
	);
};

export default Dashboard;
