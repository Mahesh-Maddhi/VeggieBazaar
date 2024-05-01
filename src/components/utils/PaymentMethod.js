import React from 'react';
const PaymentMethod = (props) => {
	const { handleOrder } = props;
	console.log(props);
	console.log(handleOrder);
	return (
		<>
			<form
				className="cart-detail p-3 p-md-4"
				onSubmit={(e) => handleOrder(e)}>
				<h3 className="billing-heading mb-4">Payment Method</h3>
				<div className="form-group">
					<div className="col-md-12">
						<div className="radio">
							<label>
								<input
									type="radio"
									name="paymentmethod"
									className="mr-2"
								/>{' '}
								Direct Bank Tranfer
							</label>
						</div>
					</div>
				</div>
				<div className="form-group">
					<div className="col-md-12">
						<div className="radio">
							<label>
								<input
									type="radio"
									name="paymentmethod"
									className="mr-2"
								/>{' '}
								Check Payment
							</label>
						</div>
					</div>
				</div>
				<div className="form-group">
					<div className="col-md-12">
						<div className="radio">
							<label>
								<input
									type="radio"
									name="paymentmethod"
									className="mr-2"
								/>{' '}
								UPI payment
							</label>
						</div>
					</div>
				</div>
				<div className="form-group">
					<div className="col-md-12">
						<div className="checkbox">
							<label>
								<input
									type="checkbox"
									value=""
									className="mr-2"
									required
								/>{' '}
								I have read and accept the terms and conditions
							</label>
						</div>
					</div>
				</div>
				<p>
					<button
						className="btn button primary-button  px-4"
						type="submit">
						Place an order
					</button>
				</p>
			</form>
			<img
				src="https://ik.imagekit.io/maheshmaddhi/veggieBazaar/bg/payments.jpg"
				alt="payments"
				className="payment-img"
			/>
		</>
	);
};

export default PaymentMethod;
