import React from 'react';

function Address(props) {
	const { street, apartment, city, postcode, state } = props;
	return (
		<address
			htmlFor="address"
			className="col-md-6 col-lg-4 col-xl-3 address p-4 m-3 border shadow rounded-lg">
			<input type="radio" name="address" />
			<p>
				<strong>Street : </strong>
				{street}
			</p>
			<p>
				<strong>Apartment : </strong>
				{apartment}
			</p>
			<p>
				<strong>City : </strong>
				{city}
			</p>
			<p>
				<strong>Postal code / Zip : </strong>
				{postcode}
			</p>
			<p>
				<strong>State : </strong>
				{state}
			</p>
		</address>
	);
}

export default Address;
