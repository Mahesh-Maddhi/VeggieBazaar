import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ productDetails }) => {
	const { name, price, discounted_price } = productDetails;

	return (
		<article className="col-md-6 col-lg-3">
			<div className="product">
				<Link href="#" className="img-prod">
					<img
						className="img-fluid"
						src="https://ik.imagekit.io/maheshmaddhi/veggieBazaar/tomotos.webp"
						alt={name}
					/>
				</Link>
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
								href="#"
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
								href="#"
								className="heart d-flex justify-content-center align-items-center ">
								<span>
									<i className="fa-solid fa-heart"></i>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default ProductCard;
