import React from 'react';
import { DealOfTheDay, ShowProducts } from '../utils';

const Shop = () => {
	return (
		<section className="shop-section">
			<ShowProducts />
			<DealOfTheDay />
		</section>
	);
};

export default Shop;
