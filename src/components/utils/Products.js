import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ categoryDetails }) => {
	const { category, products } = categoryDetails;
	return (
		<section className="products-section" id={category}>
			<h2 className="category-heading">{category}</h2>
			<div className="product-container">
				{products.map((product) => (
					<ProductCard
						productDetails={product}
						key={product.productId}
					/>
				))}
			</div>
		</section>
	);
};

export default Products;
