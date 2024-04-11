import React, { useState } from 'react';

const CartItem = (item) => {
	const { id, name, image, discounted_price, description, quantity } = item;
	const [qty, setQuantity] = useState(quantity);

	const removeItem = (id) => {
		console.log(id);
	};
	return (
		<tr className="text-center">
			<td className="product-remove ">
				<i
					className="fa-solid fa-xmark p-2 "
					onClick={() => removeItem(id)}></i>
			</td>
			<td className="image-prod">
				<img className="img" src={image} alt={name} />
			</td>
			<td className="product-name">
				<h3>{name}</h3>
				<p className="description">{description}</p>
			</td>
			<td className="price">${discounted_price}</td>
			<td className="quantity">
				<div className="input-group mb-3">
					<input
						type="number"
						name="quantity"
						className="quantity-input form-control input-number"
						value={qty}
						min="1"
						max="100"
						onChange={(e) =>
							setQuantity((prev) =>
								e.target.value > 0 ? e.target.value : prev
							)
						}
					/>
				</div>
			</td>
			<td className="total">${discounted_price * qty}</td>
		</tr>
	);
};

export default CartItem;
