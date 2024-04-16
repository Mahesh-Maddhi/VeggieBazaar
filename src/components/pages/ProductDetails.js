import React, { useEffect, useState } from 'react';
import { Spinner, requestServer } from '../utils';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	let { productId } = useParams();

	const [quantity, setQuantity] = useState(1);
	const [isLoading, setLoading] = useState(true);
	const [product, setProduct] = useState(defaultProduct);

	useEffect(() => {
		setLoading(true);
		const fetchDetails = async () => {
			const data = await requestServer(
				`https://veggie-bazaar.vercel.app/products/${productId}`
			);
			setProduct(data);
		};
		fetchDetails();
	}, [productId]);
	useEffect(() => {
		setLoading(false);
	}, [product]);

	console.log('pro', product);
	const {
		name,
		price,
		image,
		discounted_price,
		description,
		rating,
		stock,
		category,
	} = product;
	return (
		<>
			{isLoading && <Spinner />}
			{!isLoading && (
				<section className="single-product-section">
					<div className="product-image-card">
						<img
							className="product-image"
							src={image}
							alt={name}
							onError={(e) =>
								(e.target.src =
									'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/product-default-image.jpeg')
							}
						/>
					</div>
					<div className="product-details-card">
						<h3 className="product-name">{name}</h3>
						<p className="description">
							<strong className="text-dark">Category :</strong> {category}
						</p>
						<div className="rating-container">
							<p className="rating">{rating}</p>
							<p className="stars-icon-card">
								{[...Array(Math.floor(rating))].map((_, index) => (
									<i
										className="fa-solid fa-star"
										style={{ color: 'gold' }}
										key={index}></i>
								))}
							</p>
							<p>
								100 <span>Rated</span>
							</p>
							<p>
								{stock} <span>InStock</span>
							</p>
						</div>

						<div className="price-container">
							<h3 className="actual-price">₹ {discounted_price}</h3>
							<p className="price">₹ {price}</p>
						</div>
						<p className="description">{description}</p>
						<div className="product-count-container">
							<button
								type="button"
								onClick={() =>
									setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
								}>
								-
							</button>
							<input
								className="count"
								type="number"
								value={quantity}
								min="1"
								onChange={(e) => setQuantity(parseInt(e.target.value))}
							/>
							<button
								type="button"
								onClick={() => setQuantity((prev) => prev + 1)}>
								+
							</button>
						</div>
						<button
							type="button"
							className="add-to-cart-btn"
							onClick={() => {
								window.location.href = '/cart';
							}}>
							Add to Cart
						</button>
					</div>
				</section>
			)}
		</>
	);
};
const defaultProduct = {
	id: 95,
	name: 'name',
	price: 90,
	discounted_price: 50,
	description:
		'Tomatoes are juicy fruits commonly used as vegetables in cooking. They are rich in lycopene, an antioxidant that has been linked to various health benefits.',
	rating: 4.3,
	stock: 826,
	category: 'Vegetables',
	image:
		'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/product-default-image.jpeg',
};
export default ProductDetails;
