import React from 'react';
import { Link } from 'react-router-dom';
const PaymentMethod = (props) => {
	const { handleOrder } = props.onOrder;
	console.log(handleOrder);
	return (
		<div className="cart-detail p-3 p-md-4">
			<h3 className="billing-heading mb-4">Payment Method</h3>
			<div className="form-group">
				<div className="col-md-12">
					<div className="radio">
						<label>
							<input type="radio" name="paymentmethod" className="mr-2" />{' '}
							Direct Bank Tranfer
						</label>
					</div>
				</div>
			</div>
			<div className="form-group">
				<div className="col-md-12">
					<div className="radio">
						<label>
							<input type="radio" name="paymentmethod" className="mr-2" /> Check
							Payment
						</label>
					</div>
				</div>
			</div>
			<div className="form-group">
				<div className="col-md-12">
					<div className="radio">
						<label>
							<input type="radio" name="paymentmethod" className="mr-2" />{' '}
							Paypal
						</label>
					</div>
				</div>
			</div>
			<div className="form-group">
				<div className="col-md-12">
					<div className="checkbox">
						<label>
							<input type="checkbox" value="" className="mr-2" /> I have read
							and accept the terms and conditions
						</label>
					</div>
				</div>
			</div>
			<p>
				<Link
					to="/shop"
					className="btn button primary-button  px-4"
					onClick={() => handleOrder()}>
					Place an order
				</Link>
			</p>
		</div>
	);
};

export default PaymentMethod;
