import React from 'react';
import { useSelector } from 'react-redux';

const CartTotal = () => {
	const cartTotal = useSelector((state) => state.cartTotal.total);
	return (
		<div className="cart-detail cart-total p-5 p-md-4 shadow">
			<h3 className="billing-heading mb-4">Cart Total</h3>
			<p className="d-flex">
				<span className="mr-3">Subtotal</span>
				<span className="text-right w-100">₹ {cartTotal}.00</span>
			</p>
			<p className="d-flex">
				<span className="mr-3">Delivery</span>
				<span className="text-right  w-100">₹ 40.00</span>
			</p>
			<p className="d-flex">
				<span className="mr-3">Discount</span>
				<span className="text-right  w-100">₹ -40.00</span>
			</p>
			<hr />
			<p className="d-flex total-price">
				<span className="mr-3 font-weight-bold">Total</span>
				<span className="text-right  w-100 font-weight-bold">
					₹ {cartTotal}.00
				</span>
			</p>
		</div>
	);
};

export default CartTotal;
