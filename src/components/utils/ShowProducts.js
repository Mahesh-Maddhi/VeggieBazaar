import React, { useEffect, useState } from 'react';
import Products from './Products';
import Spinner from './Spinner';
import requestServer from './requestServer';
const categories = ['Vegetables', 'Fruits', 'Juices', 'Dried'];

const ShowProducts = () => {
	const [categoryProducts, setCategoryProducts] = useState([]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		const fetchProducts = async (category) => {
			try {
				// const response = await axios.get(
				// 	`https://veggie-bazaar.vercel.app/categories/${category}`
				// );
				const products = await requestServer(`/categories/${category}`);

				return { category, products: products };
			} catch (error) {
				console.log(error);
				return { category, products: [] };
			}
		};
		const fetchData = async () => {
			const promises = categories.map(async (category) => {
				return await fetchProducts(category);
			});
			console.log('promises', promises);
			const products = await Promise.all(promises);
			setCategoryProducts(products);
			console.log(1, 'category setCategoryProducts');
		};
		fetchData();
		console.log('useeffect-fetchData');
	}, []);
	useEffect(() => {
		setLoading(false);
		console.log('useeffect-loadingFalse');
	}, [categoryProducts]);
	console.log('full component render', 2);

	console.log('products', categoryProducts);

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
