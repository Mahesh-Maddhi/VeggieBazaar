import React, { useEffect, useState } from 'react';
import Products from './Products';
import Spinner from './Spinner';
import requestServer from './requestServer';
const categories = ['Vegetables', 'Fruits', 'Juices', 'Dried'];

const ShowProducts = () => {
	const [categoryProducts, setCategoryProducts] = useState([]);
	const [isLoading, setLoading] = useState(true);

	let localProducts;
	useEffect(() => {
		localProducts = localStorage.getItem('localProducts');
		console.log(localProducts?.length);
		if (localProducts && localProducts.length > 2) {
			setCategoryProducts(JSON.parse(localProducts));
			console.log('set-products-from-local');
		} else {
			console.log('set-products-from-cloud');
			const fetchProducts = async (category) => {
				try {
					const productsArray = await requestServer(
						`/categories/${category}`,
					);
					return {
						category,
						products: productsArray,
					};
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
		}
	}, [localProducts]);

	useEffect(() => {
		setLoading(false);
		console.log('useeffect-loadingFalse');
		localStorage.setItem('localProducts', JSON.stringify(categoryProducts));
	}, [categoryProducts]);
	console.log('full component render');

	console.log('products', categoryProducts);

	return (
		<section>
			{isLoading && <Spinner />}
			{!isLoading &&
				categoryProducts?.map((categoryDetails) => (
					<Products
						categoryDetails={categoryDetails}
						key={categoryDetails.category}
					/>
				))}
		</section>
	);
};

export default ShowProducts;
