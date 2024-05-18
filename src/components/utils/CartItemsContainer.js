import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import requestServer from './requestServer';
import { Link, useNavigate } from 'react-router-dom';
import Coupon from './Coupon';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setItemsCount } from '../../store/cartItemsCountSlice';
const CartItemsContainer = () => {
	const navigate = useNavigate();
	const [cartItems, setCartItems] = useState([]);
	const dispatch = useDispatch();
	dispatch(setItemsCount(cartItems?.length));

	const isLoggedIn = Cookies.get('isLoggedIn') === 'true' ? true : false;
	if (!isLoggedIn) navigate('/login');

	const onDelete = async (deleteId) => {
		const newCartItems = cartItems.filter(
			(cartItem) => cartItem.productId !== deleteId,
		);

		setCartItems(newCartItems);
		const options = {
			method: 'DELETE',
		};
		const responseData = await requestServer(
			`/deleteProductFromCart/${deleteId}`,
			options,
		);

		const notify = () => toast.success(responseData?.message);
		notify();
	};
	useEffect(() => {
		if (!isLoggedIn) return navigate('/login');
		const fetchProducts = async () => {
			try {
				const responseData = await requestServer('/cart');
				return responseData;
			} catch (error) {
				console.log(error);
			}
		};
		const setProducts = async () => {
			const data = await fetchProducts();
			setCartItems(data);
		};
		setProducts();
	}, [isLoggedIn]);
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
												key={cartItem.productId}
											/>
										);
									})}
							</tbody>
						</table>
						{(cartItems?.length < 1 || !cartItems) && (
							<div className="empty-cart ">
								<h5 className="">Add items to cart</h5>
								<Link
									to="/shop"
									className="btn primary-button ">
									Shop Now
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="row justify-content-end">
				<div className="col-lg-6 mt-5 cart-wrap">
					<Coupon />
				</div>

				<div className="col-lg-6 mt-5 cart-wrap ">
					<div className="cart-total mb-3 p-5 shadow border m-2">
						<h3 className="billing-heading mb-4">Cart Total</h3>
						<p className="d-flex">
							<span className="mr-3">Subtotal</span>
							<span className="text-right w-100">₹60.60</span>
						</p>
						<p className="d-flex">
							<span className="mr-3">Delivery</span>
							<span className="text-right  w-100">₹0.00</span>
						</p>
						<p className="d-flex">
							<span className="mr-3">Discount</span>
							<span className="text-right  w-100">₹3.00</span>
						</p>
						<hr />
						<p className="d-flex total-price">
							<span className="mr-3 font-weight-bold">Total</span>
							<span className="text-right  w-100 font-weight-bold">
								₹57.60
							</span>
						</p>
						<p className="text-center">
							<Link
								to="/checkout"
								className="btn  primary-button">
								Proceed to Checkout
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItemsContainer;
