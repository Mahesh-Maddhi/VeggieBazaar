import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CartItem = (props) => {
	const { onDelete } = props;
	const { productId, name, image, discounted_price, description, quantity } =
		props.cartItem;
	const [qty, setQuantity] = useState(quantity);

	return (
		<tr className="text-center">
			<td className="product-remove ">
				<i
					className="fa-solid fa-xmark p-2 "
					onClick={() => onDelete(productId)}></i>
			</td>
			<td className="image-prod">
				<Link
					className="text-decoration-none"
					to={`/products/${productId}`}>
					<img className="img" src={image} alt={name} />
				</Link>
			</td>
			<td className="product-name">
				<h3>
					<Link
						className="text-decoration-none"
						to={`/products/${productId}`}>
						{name}
					</Link>
				</h3>
				<p className="description">{description}</p>
			</td>
			<td className="price">₹{discounted_price}</td>
			<td className="quantity">
				<div className="input-group mb-3">
					<input
						type="number"
						name="quantity"
						className="quantity-input form-control input-number"
						value={qty}
						min="1"
						max="100"
						maxLength="2"
						onChange={(e) => {
							const newValue = e.target.value.slice(0, 2);
							setQuantity(newValue > 0 ? newValue : 0);
						}}
					/>
				</div>
			</td>
			<td className="total">₹{discounted_price * qty}</td>
		</tr>
	);
};

export default CartItem;
