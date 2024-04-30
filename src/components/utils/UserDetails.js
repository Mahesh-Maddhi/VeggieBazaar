import React from 'react';

const UserDetails = (props) => {
	const { fullName = 'name', email = 'email', mobile = 'mobile' } = props;
	return (
		<div className="p-3 my-4 bg-light rounded-lg border">
			<h2 className=" ">User Details</h2>
			<div className="my-3  p-3 shadow d-inline-block">
				<p className="d-inline my-5 mr-5 ml-0">
					<strong>Full Name : </strong>
					{fullName}
				</p>
				<p className="d-inline  my-5 mr-5 ml-0">
					<strong>Email : </strong>
					{email}
				</p>
				<p className="d-inline my-5 mr-5 ml-0">
					<strong>Mobile : </strong>
					{mobile}
				</p>
			</div>
		</div>
	);
};

export default UserDetails;
