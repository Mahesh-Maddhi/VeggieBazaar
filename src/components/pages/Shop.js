import React from 'react';
import { DealOfTheDay, Spinner, Modal, ShowProducts } from '../utils';

const Shop = () => {
	return (
		<section className="shop-section">
			<Modal />
			<Spinner />
			<ShowProducts />
			<DealOfTheDay />
		</section>
	);
};

export default Shop;
