import React, { useEffect, useState } from 'react';
import Products from './Products';
import axios from 'axios';
import Spinner from './Spinner';
const categories = ['Vegetables', 'Fruits', 'Juices', 'Dried'];

const ShowProducts = () => {
	const [categoryProducts, setCategoryProducts] = useState([]);
	const [isLoading, setLoading] = useState(true);
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
			console.log(1);
		};
		fetchData();
		console.log('useeffect');
	}, []);
	useEffect(() => {
		setLoading(false);
		console.log('useeffect2');
	}, [categoryProducts]);
	console.log(2);

	console.log('prducts', categoryProducts);

	return (
		<section>
			{isLoading && <Spinner />}
			{!isLoading &&
				categoryProducts.map((categoryDetails) => (
					<Products
						categoryDetails={categoryDetails}
						key={categoryDetails.category}
					/>
				))}
		</section>
	);
};

export default ShowProducts;
