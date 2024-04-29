import React from 'react';
const Coupon = () => {
	const applyCoupon = (e) => {
		e.preventDefault();
	};
	return (
		<div className="cart-total coupon mb-3 p-5 shadow border m-2">
			<h5 className="text-center">Apply Coupon Code</h5>
			<p>Enter your coupon code if you have one</p>
			<form className="coupon" onSubmit={(e) => applyCoupon(e)}>
				<div className="form-group">
					<label htmlFor="couponcode">Coupon code</label>
					<input
						type="text"
						className="form-control text-left px-3"
						name="couponcode"
						placeholder=""
					/>
				</div>
				<p className="text-center mt-5">
					<button type="submit" className="btn primary-button">
						Apply Coupon
					</button>
				</p>
			</form>
		</div>
	);
};

export default Coupon;
