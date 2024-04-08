import React from 'react';
import Products from './Products';
import { productsData } from '../../productsData';

const categories = [
	{
		category: 'Vegetables',
		products: productsData.Vegetables,
	},
	{
		category: 'Fruits',
		products: productsData.Fruits,
	},
	{
		category: 'Juices',
		products: productsData.Juices,
	},
	{
		category: 'Dried',
		products: productsData.Cereals,
	},
];

const ShowProducts = () => {
	console.log('cat', categories);
	return (
		<section>
			{categories.map((categoryDetails) => (
				<Products
					categoryDetails={categoryDetails}
					key={categoryDetails.category}
				/>
			))}
		</section>
	);
};

export default ShowProducts;
