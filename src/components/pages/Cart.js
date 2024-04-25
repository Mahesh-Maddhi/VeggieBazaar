import React from 'react';
import Banner from '../utils/Banner';
import { CartItemsContainer } from '../utils';
const Cart = () => {
	return (
		<section className="cart-section">
			<Banner />
			<CartItemsContainer />
		</section>
	);
};

export default Cart;
