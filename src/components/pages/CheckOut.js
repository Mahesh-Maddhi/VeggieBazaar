import React from 'react';
import { Banner, BillingForm, CartTotal, PaymentMethod } from '../utils';
import { toast } from 'react-toastify';
const CheckOut = () => {
	const bannerDetails = {
		section: 'Checkout',
		title: 'Check Out',
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
	};
	const handleOrder = () => {
		console.log('hello');
		toast.success('Order Placed Successfully');
	};

	return (
		<section className="checkout-section">
			<Banner {...bannerDetails} />
			<div className="container mt-3">
				<div className="row justify-content-center">
					<BillingForm onSubmit={handleSubmit} />
					<div className="col-xl-7"></div>
					<div className="col-xl-5">
						<div className="row mt-5 pt-3">
							<div className="col-md-12 d-flex mb-5">
								<CartTotal />
							</div>
							<div className="col-md-12">
								<PaymentMethod onOrder={handleOrder} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CheckOut;
