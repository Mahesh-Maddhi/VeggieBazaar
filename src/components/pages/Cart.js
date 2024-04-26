import React from 'react';
import Banner from '../utils/Banner';
import { CartItemsContainer } from '../utils';
const Cart = () => {
	const bannerDetails = {
		section: 'cart',
		title: 'My Cart',
		bgImageUrl:
			'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/bg/veggies-bg.jpg',
	};
	return (
		<section className="cart-section">
			<Banner {...bannerDetails} />
			<CartItemsContainer />
		</section>
	);
};

export default Cart;
