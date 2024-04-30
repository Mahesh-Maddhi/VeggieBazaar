import React from 'react';

function UserDetails({
	fullName = 'Mahesh K',
	email = 'mahesh@gmail.com',
	mobile = '9876543210',
}) {
	return (
		<div className="p-3  bg-light rounded-lg">
			<h2 className=" ">User Details</h2>
			<div>
				<label htmlFor="fullName">Full Name : </label>
				<input
					className="form-control border-0 ml-2"
					id="fullName"
					type="text"
					value={fullName}
					readOnly
				/>
			</div>
			<div>
				<label htmlFor="email">Email : </label>
				<input
					className="form-control border-0 ml-2"
					id="email"
					type="text"
					value={email}
					readOnly
				/>
			</div>
			<div>
				<label htmlFor="mobile">Mobile : </label>
				<input
					className="form-control border-0 ml-2"
					id="mobile"
					type="text"
					value={mobile}
					readOnly
				/>
			</div>
		</div>
	);
}

export default UserDetails;
