import React from 'react';
import { DealOfTheDay, Spinner, ShowProducts } from '../utils';

const Shop = () => {
	return (
		<section className="shop-section">
			<Spinner />
			<ShowProducts />
			<DealOfTheDay />
		</section>
	);
};

export default Shop;
