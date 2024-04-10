import React, { useEffect, useState } from 'react';
import Products from './Products';
import axios from 'axios';
const categories = ['Vegetables', 'Fruits', 'Juices', 'Dried'];

const ShowProducts = () => {
	const [categoryProducts, setCategoryProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async (category) => {
			try {
				const response = await axios.get(
					`https://veggie-bazaar.vercel.app/categories/${category}`
				);
				return { category, products: response.data };
			} catch (error) {
				console.log(error);
				return { category, products: [] };
			}
		};
		const fetchData = async () => {
			const promises = categories.map(async (category) => {
				return await fetchProducts(category);
			});
			const products = await Promise.all(promises);
			setCategoryProducts(products);
		};
		fetchData();
	}, []);

	console.log(categoryProducts);

	return (
		<section>
			{categoryProducts.map((categoryDetails) => (
				<Products
					categoryDetails={categoryDetails}
					key={categoryDetails.category}
				/>
			))}
		</section>
	);
};

export default ShowProducts;
