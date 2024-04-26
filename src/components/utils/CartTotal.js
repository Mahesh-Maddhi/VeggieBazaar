import React from 'react';

const CartTotal = () => {
	return (
		<div className="cart-detail cart-total p-3 p-md-4">
			<h3 className="billing-heading mb-4">Cart Total</h3>
			<p className="d-flex">
				<span>Subtotal</span>
				<span>$20.60</span>
			</p>
			<p className="d-flex">
				<span>Delivery</span>
				<span>$0.00</span>
			</p>
			<p className="d-flex">
				<span>Discount</span>
				<span>$3.00</span>
			</p>
			<hr />
			<p className="d-flex total-price">
				<span>Total</span>
				<span>$17.60</span>
			</p>
		</div>
	);
};

export default CartTotal;
