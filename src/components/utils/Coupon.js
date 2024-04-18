import React from 'react';
import { Link } from 'react-router-dom';
const Coupon = () => {
	return (
		<div className="cart-total mb-3 p-5 shadow border m-2">
			<h5 className="text-center">Apply Coupon Code</h5>
			<p>Enter your coupon code if you have one</p>
			<form className="info">
				<div className="form-group">
					<label htmlFor="">Coupon code</label>
					<input
						type="text"
						className="form-control text-left px-3"
						placeholder=""
					/>
				</div>
				<p className="text-center mt-3">
					<Link to="/checkout" className="btn btn-success">
						Apply Coupon
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Coupon;
