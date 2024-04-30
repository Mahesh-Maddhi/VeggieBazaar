import React from 'react';

const Address = (props) => {
	const { _id, street, mandal, district, pincode, state, removeAddress } =
		props;
	console.log('props', props);

	return (
		<address className="col-md-6 col-lg-4 col-xl-3 address p-4 m-3 border shadow rounded-lg position-relative">
			<input type="radio" name="address" className="mr-3 radio" />
			<label htmlFor="address">Select</label>
			<button className="x-icon btn" onClick={() => removeAddress(_id)}>
				<i className="fa-solid fa-xmark "></i>
			</button>

			<p>
				<strong>Street : </strong>
				{street}
			</p>
			<p>
				<strong>Mandal : </strong>
				{mandal}
			</p>
			<p>
				<strong>District : </strong>
				{district}
			</p>
			<p>
				<strong>pincode / Zip : </strong>
				{pincode}
			</p>
			<p>
				<strong>State : </strong>
				{state}
			</p>
		</address>
	);
};

export default Address;
