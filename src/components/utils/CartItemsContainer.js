import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import requestServer from './requestServer';
import { useNavigate } from 'react-router-dom';

const CartItemsContainer = () => {
	const navigate = useNavigate();
	const [cartItems, setCartItems] = useState(null);

	const token = localStorage.getItem('auth_token');
	if (!token) {
		navigate('/login');
	}
	const onDelete = async (id) => {
		const options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `BEARER ${token}`,
			},
		};
		console.log(options);
		const responsedata = await requestServer(
			`/deleteProductFromCart/${id}`,
			options
		);
		console.log('res-delete from  cart', responsedata);
	};
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const options = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `BEARER ${token}`,
					},
				};
				const responsedata = await requestServer('/cart', options);
				return responsedata;
			} catch (error) {
				console.log(error);
			}
		};
		const setProducts = async () => {
			const data = await fetchProducts();
			setCartItems(data);
		};
		setProducts();
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="cart-list">
						<table className="table shadow my-3">
							<thead className="thead-primary">
								<tr className="text-center">
									<th>&nbsp;</th>
									<th>&nbsp;</th>
									<th>Product name</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Total</th>
								</tr>
							</thead>

							<tbody>
								{cartItems &&
									cartItems.map((cartItem) => {
										return (
											<CartItem
												cartItem={cartItem}
												onDelete={onDelete}
												key={cartItem.id}
											/>
										);
									})}
							</tbody>
						</table>
						{!cartItems && (
							<div className="empty-cart ">
								<h5 className="">Add items to cart</h5>
							</div>
						)}
					</div>
				</div>
			</div>
			{/* <div className="row justify-content-end">
				<div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
					<div className="cart-total mb-3">
						<h3>Coupon Code</h3>
						<p>Enter your coupon code if you have one</p>
						<form className="info">
							<div className="form-group">
								<label for="">Coupon code</label>
								<input
									type="text"
									className="form-control text-left px-3"
									placeholder=""
								/>
							</div>
						</form>
					</div>
					<p>
						<a href="checkout.html" className="btn btn-primary py-3 px-4">
							Apply Coupon
						</a>
					</p>
				</div>
				<div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
					<div className="cart-total mb-3">
						<h3>Estimate shipping and tax</h3>
						<p>Enter your destination to get a shipping estimate</p>
						<form className="info">
							<div className="form-group">
								<label for="">Country</label>
								<input
									type="text"
									className="form-control text-left px-3"
									placeholder=""
								/>
							</div>
							<div className="form-group">
								<label for="country">State/Province</label>
								<input
									type="text"
									className="form-control text-left px-3"
									placeholder=""
								/>
							</div>
							<div className="form-group">
								<label for="country">Zip/Postal Code</label>
								<input
									type="text"
									className="form-control text-left px-3"
									placeholder=""
								/>
							</div>
						</form>
					</div>
					<p>
						<a href="" className="btn btn-primary py-3 px-4">
							Estimate
						</a>
					</p>
				</div>
				<div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
					<div className="cart-total mb-3">
						<h3>Cart Totals</h3>
						<p className="d-flex">
							<span>Subtotal</span>
							<span>$20.60</span>
						</p>
						<p className="d-flex">
							<span>Delivery</span>
							<span>$0.00</span>
						</p>
						<p className="d-flex">
							<span>Discount</span>
							<span>$3.00</span>
						</p>
						<hr />
						<p className="d-flex total-price">
							<span>Total</span>
							<span>$17.60</span>
						</p>
					</div>
					<p>
						<a href="c" className="btn btn-primary py-3 px-4">
							Proceed to Checkout
						</a>
					</p>
				</div>
			</div> */}
		</div>
	);
};

export default CartItemsContainer;
