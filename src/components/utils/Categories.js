import React from 'react';
import { Link } from 'react-router-dom';
const categories = [
	{
		category: 'Vegetables',
		image_url:
			'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/vege-shop.jpg',
	},
	{
		category: 'Fruits',
		image_url:
			'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/fruits-basket.jpg',
	},
	{
		category: 'Juices',
		image_url: 'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/juice.jpg',
	},
	{
		category: 'All',
		image_url:
			'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/all-vegetables.jpg',
	},
	{
		category: 'Dried',
		image_url:
			'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/cerels.jpg',
	},
];

const Categories = () => {
	return (
		<section className="categories-section">
			<div className="our-products">
				<p className="our-products-sub-heading">Featured Products</p>
				<h2 className="our-products-heading">Our Products</h2>
				<p className="our-products-description">
					Choose fresh, colorful, organic, local, seasonal vegetables
					for optimal health.
				</p>
			</div>
			<ul className="categories">
				<li
					className="d-flex justify-content-center col-12 col-sm-12 col-md-6 col-lg-4 order-lg-1"
					key={6}>
					<div className="category-card category-special ">
						<h3 className="category-vegetables-text">Vegetables</h3>
						<p>Protect the health of every one</p>
						<Link className="button category-btn" to="/shop">
							Shop Now
						</Link>
					</div>
				</li>

				{categories.map((category, index) => {
					return (
						<li
							className={`d-flex justify-content-center col-12 col-sm-12 col-md-6 col-lg-4 order-lg-${index}`}
							key={index}>
							<Link to="/shop">
								<div className="category-card">
									<img
										loading="lazy"
										className="category-image"
										src={category.image_url}
										alt={category.category}
									/>
									<p className="category-label">
										{category.category}
									</p>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Categories;
