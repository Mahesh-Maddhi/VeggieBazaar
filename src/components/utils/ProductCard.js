import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ productDetails }) => {
	const { id, name, price, discounted_price, image } = productDetails;

	return (
		<Link
			className="col-md-6 col-lg-3 text-decoration-none"
			to={`/products/${id}`}>
			<article className="product">
				<div className="img-prod">
					<img
						className="img-fluid"
						src={image}
						alt={name}
						loading="lazy"
						onError={(e) =>
							(e.target.src =
								'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/product-default-image.jpeg')
						}
					/>
				</div>
				<div className="text py-3 pb-4 px-3 text-center">
					<h3>
						<p>{name}</p>
					</h3>
					<div className="d-flex">
						<div className="pricing">
							<p className="price">
								<span className="mr-2 price-dc">₹ {price}</span>
								<span className="price-sale">₹ {discounted_price}</span>
							</p>
						</div>
					</div>
					<div className="bottom-area d-flex px-3">
						<div className="m-auto d-flex">
							<Link
								to={`/products/${id}`}
								className="add-to-cart d-flex justify-content-center align-items-center text-center">
								<span>
									<i className="fa-solid fa-bars"></i>
								</span>
							</Link>
							<Link
								href="#"
								className="buy-now d-flex justify-content-center align-items-center mx-1">
								<span>
									<i className="fa-solid fa-cart-arrow-down"></i>
								</span>
							</Link>
							<Link
								to={`/products/${id}`}
								className="heart d-flex justify-content-center align-items-center ">
								<span>
									<i className="fa-solid fa-heart"></i>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</article>
		</Link>
	);
};

export default ProductCard;
