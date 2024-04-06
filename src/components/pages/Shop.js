import React from 'react';
import { Categories, DealOfTheDay, Spinner, Modal } from '../utils';

const Shop = () => {
	return (
		<section className="shop-section">
			<Modal />
			<Categories />;
			<DealOfTheDay />
			<Spinner />
		</section>
	);
};

export default Shop;
