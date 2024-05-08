import React from 'react';
import Cookies from 'js-cookie';
import {
	Banner,
	BillingForm,
	CartTotal,
	PaymentMethod,
	requestServer,
} from '../utils';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const CheckOut = () => {
	const navigate = useNavigate();
	const bannerDetails = {
		section: 'Checkout',
		title: 'Check Out',
	};
	const isLoggedIn = Cookies.get('isLoggedIn') === 'true' ? true : false;
	const handleBilling = async (e) => {
		e.preventDefault();
		if (!isLoggedIn) {
			toast.error('Need to Login before adding Address');
			navigate('/login');
		}

		const formData = new FormData(e.target);
		const formObject = Array.from(formData.entries()).reduce(
			(acc, [key, value]) => {
				acc[key] = value;
				return acc;
			},
			{},
		);
		const options = {
			method: 'POST',
			body: JSON.stringify(formObject),
		};
		try {
			const response = await requestServer('/addAddress', options);
			if (response) {
				toast.success(response.message);
				e.target.reset();
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};
	const handleOrder = (e) => {
		e.preventDefault();
		toast.success('Order Placed Successfully');
	};

	return (
		<section className="checkout-section">
			<Banner {...bannerDetails} />
			<div className="container mt-3">
				<div className="row justify-content-center">
					<BillingForm handleBilling={handleBilling} />
					<div className="col-xl-7"></div>
					<div className="col-xl-5">
						<div className="row mt-5 pt-3">
							<div className="col-md-12 d-flex mb-5">
								<CartTotal />
							</div>
							<div className="col-md-12">
								<PaymentMethod handleOrder={handleOrder} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CheckOut;
