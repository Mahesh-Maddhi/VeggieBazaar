import React from 'react';

const CartTotal = () => {
	return (
		<div className="cart-detail cart-total p-3 p-md-4">
			<h3 className="billing-heading mb-4">Cart Total</h3>
			<p className="d-flex">
				<span className="mr-3">Subtotal</span>
				<span className="text-right w-100">₹60.60</span>
			</p>
			<p className="d-flex">
				<span className="mr-3">Delivery</span>
				<span className="text-right  w-100">₹0.00</span>
			</p>
			<p className="d-flex">
				<span className="mr-3">Discount</span>
				<span className="text-right  w-100">₹3.00</span>
			</p>
			<hr />
			<p className="d-flex total-price">
				<span className="mr-3 font-weight-bold">Total</span>
				<span className="text-right  w-100 font-weight-bold">
					₹57.60
				</span>
			</p>
		</div>
	);
};

export default CartTotal;
