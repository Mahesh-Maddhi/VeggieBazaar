import React, { useEffect, useState } from 'react';
import { Spinner, requestServer } from '../utils';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
const ProductDetails = () => {
	const { id } = useParams();

	const navigate = useNavigate();

	const [quantity, setQuantity] = useState(1);
	const [isLoading, setLoading] = useState(true);
	const [product, setProduct] = useState(defaultProduct);

	const onAddToCart = async (productId) => {
		const isLoggedIn = Cookies.get('isLoggedIn') === 'true' ? true : false;

		if (!isLoggedIn) {
			return navigate('/login');
		}

		const data = {
			productId,
			quantity,
		};
		const options = {
			method: 'POST',

			body: JSON.stringify(data),
		};
		const responsedata = await requestServer('/addToCart', options);
		if (responsedata) {
			toast.success(responsedata?.message);
			navigate('/cart');
		} else {
			toast.error('something went wrong');
		}
	};

	useEffect(() => {
		setLoading(true);
		const fetchDetails = async () => {
			const data = await requestServer(`/products/${id}`);
			setProduct(data);
		};
		fetchDetails();
	}, [id]);

	useEffect(() => {
		if (product.productId !== undefined) {
			setLoading(false);
		}
	}, [product]);

	const {
		productId,
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
							<strong className="text-dark">Category :</strong>{' '}
							{category}
						</p>
						<div className="rating-container">
							<p className="rating">{rating}</p>
							<p className="stars-icon-card">
								{[...Array(Math.floor(rating))].map(
									(_, index) => (
										<i
											className="fa-solid fa-star"
											style={{
												color: 'gold',
											}}
											key={index}></i>
									),
								)}
							</p>
							<p>
								100 <span>Rated</span>
							</p>
							<p>
								{stock} <span>InStock</span>
							</p>
						</div>

						<div className="price-container">
							<h3 className="actual-price">
								₹ {discounted_price}
							</h3>
							<p className="price">₹ {price}</p>
						</div>
						<p className="description">{description}</p>
						<div className="product-count-container">
							<button
								className="btn"
								type="button"
								onClick={() =>
									setQuantity((prev) =>
										prev > 1 ? prev - 1 : prev,
									)
								}>
								-
							</button>
							<input
								className="count"
								type="number"
								value={quantity}
								min="1"
								onChange={(e) =>
									setQuantity(parseInt(e.target.value))
								}
							/>
							<button
								className="btn"
								type="button"
								onClick={() => setQuantity((prev) => prev + 1)}>
								+
							</button>
						</div>
						<button
							type="button"
							className="add-to-cart-btn"
							onClick={() => onAddToCart(productId)}>
							Add to Cart
						</button>
					</div>
				</section>
			)}
		</>
	);
};
const defaultProduct = {
	id: 0,
	name: 'name',
	price: 0,
	discounted_price: 0,
	description: 'Description goes here.',
	rating: 0.0,
	stock: 0,
	category: 'category',
	image: 'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/product-default-image.jpeg',
};
export default ProductDetails;
