import React from 'react';
import { Banner, UserDetails, Address, Logout } from '../utils';
import { Link, useNavigate } from 'react-router-dom';
function Dashboard() {
	const addresses = [
		{
			street: 'Manikeshwari nagar',
			apartment: '',
			city: 'Hyderabad',
			postcode: '500007',
			state: 'Telangana',
		},
		{
			street: 'Tekulapally',
			apartment: "kummari's Apartments",
			city: 'Vikarabad',
			postcode: '500007',
			state: 'Telangana',
		},
	];
	const bannerDetails = {
		section: 'Dashboard',
		title: 'Dashboard',
	};
	const navigate = useNavigate();

	const token = localStorage.getItem('auth_token');
	if (!token) {
		navigate('/login');
	}
	return (
		<section className="dashboard-section">
			<Banner {...bannerDetails} />
			<div className="text-right">
				<Logout />
			</div>

			<div className="col-md-12">
				<UserDetails />
			</div>
			<div className="col-md-12">
				<div className=" p-3 bg-light rounded-lg border-dark">
					<h2 className="">Address</h2>
					<div className="row align-items-center">
						{addresses.map((address) => {
							return <Address {...address} />;
						})}

						<Link
							to="/checkout"
							className="p-6 m-5 shadow d-flex justify-content-center align-items-center add-button rounded-circle">
							<i class="fa-solid fa-plus icon"></i>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Dashboard;
