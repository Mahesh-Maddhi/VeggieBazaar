import React from 'react';
import CartItem from './CartItem';

const cartItems = [
	{
		id: 1,
		name: 'Bell Pepper',
		price: 70,
		discounted_price: 60,
		quantity: 1,
		description:
			'Bell peppers, also known as sweet peppers, come in various colors such as red, yellow, and green. They are crunchy and sweet, and can be eaten raw or cooked in a variety of dishes.',
		rating: 4.4,
		stock: 836,
		category: 'Vegetables',
		image:
			'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/vegetables/capsicum.jpg',
	},
	{
		id: 102,
		name: 'Orange',
		price: 70,
		quantity: 2,
		discounted_price: 60,
		description:
			'Oranges are citrus fruits with a bright and tangy flavor. They are rich in vitamin C, antioxidants, and fiber, making them a refreshing and nutritious snack.',
		rating: 4.1,
		stock: 960,
		category: 'Fruits',
		image:
			'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/fruits/orange.jpeg',
	},
	{
		id: 200,
		name: 'Apple Juice',
		price: 100,
		quantity: 2,
		discounted_price: 90,
		description:
			'Apple juice is a refreshing beverage made from pressed apples. It has a sweet and tangy flavor and is rich in vitamins and antioxidants.',
		rating: 4.4,
		stock: 980,
		category: 'Juices',
		image:
			'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/juices/apple-juice.jpeg',
	},
	{
		id: 401,
		name: 'Almonds',
		price: 50,
		quantity: 1,
		discounted_price: 45,
		description:
			'Almonds are nutrient-rich nuts that are high in protein, healthy fats, and essential vitamins and minerals. They make for a delicious and crunchy snack.',
		rating: 4.8,
		stock: 1200,
		category: 'dried',
		image: 'https://ik.imagekit.io/maheshmaddhi/veggieBazaar/dried/almonds.jpg',
	},
];

const CartItemsContainer = () => {
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
								{cartItems.map((cartItem) => {
									return <CartItem {...cartItem} />;
								})}
							</tbody>
						</table>
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
