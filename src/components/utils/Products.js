import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ categoryDetails }) => {
	console.log(categoryDetails);
	const { category, products } = categoryDetails;
	return (
		<section className="products-section">
			<h2 className="category-heading">{category}</h2>
			<div className="product-container">
				{products.map((product) => (
					<ProductCard productDetails={product} key={product.id} />
				))}
			</div>
		</section>
	);
};

export default Products;
