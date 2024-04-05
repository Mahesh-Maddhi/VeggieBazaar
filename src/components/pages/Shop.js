import React from 'react';
import Categories from './Categories';
import DealOfTheDay from './DealOfTheDay';
import Spinner from './Spinner';

const Shop = () => {
	return (
		<section className="shop-section">
			<Categories />;
			<DealOfTheDay />
			<Spinner />
		</section>
	);
};

export default Shop;
