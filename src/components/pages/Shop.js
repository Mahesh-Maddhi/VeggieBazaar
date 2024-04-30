import React from 'react';
import { DealOfTheDay, ShowProducts } from '../utils';
const Shop = () => {
	return (
		<section className="shop-section">
			<div className="navigator">
				<a href="#All" className="category">
					All
				</a>
				<a href="#Vegetables" className="category">
					Vegetables
				</a>
				<a href="#Fruits" className="category">
					Fruits
				</a>
				<a href="#Juices" className="category">
					Juices
				</a>
				<a href="#Dried" className="category">
					Dried
				</a>
			</div>
			<ShowProducts />
			<DealOfTheDay />
		</section>
	);
};

export default Shop;
