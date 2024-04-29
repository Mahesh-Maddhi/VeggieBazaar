import React from 'react';

const BillingForm = (props) => {
	const { handleBilling } = props;
	return (
		<form className="billing-form" onSubmit={(e) => handleBilling(e)}>
			<h3 className="mb-4 billing-heading">Billing Details</h3>
			<div className="row align-items-end">
				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="firstname">First Name</label>
						<input
							type="text"
							className="form-control"
							placeholder=""
							required
							name="firstName"
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="lastname">Last Name</label>
						<input
							type="text"
							className="form-control"
							placeholder=""
							required
							name="lastName"
						/>
					</div>
				</div>

				<div className="col-md-12">
					<div className="form-group">
						<label htmlFor="state">State </label>
						<div className="select-wrap">
							<div className="icon">
								<span className="fa-solid fa-angle-down"></span>
							</div>
							<select
								name="state"
								id="state"
								className="form-control">
								<option value="Telangana" selected>
									Telangana
								</option>
								<option value="Andhra Pradesh">
									Andhra Pradesh
								</option>
								<option value="Kerala">Kerala</option>
								<option value="Karnataka">Karnataka</option>
								<option value="Maharastra">Maharastra</option>
								<option value="Madhya Pradesh">
									Madhya Pradesh
								</option>
							</select>
						</div>
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="street">Street Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="House number and street name"
							required
							name="street"
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="street">Village / Mandal</label>
						<input
							type="text"
							className="form-control"
							placeholder="village/Mandal"
							name="mandal"
						/>
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="district">District / City</label>
						<input
							type="text"
							className="form-control"
							placeholder=""
							required
							name="district"
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="pincode">pincode / ZIP *</label>
						<input
							type="text"
							className="form-control"
							placeholder=""
							required
							name="pincode"
						/>
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input
							type="text"
							className="form-control"
							placeholder=""
							required
							name="phone"
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="email">Email Address</label>
						<input
							type="text"
							className="form-control"
							placeholder=""
							required
							name="email"
						/>
					</div>
				</div>
				<div className="col-md-12">
					<div className="form-group">
						<div className="radio d-flex align-items-center flex-wrap">
							<label className="mr-5">
								<input
									type="radio"
									className="mr-2"
									required
									name="shippingAddress"
									value="previousAddress"
								/>
								Use Previous Address
							</label>
							<label>
								<input
									type="radio"
									className="mr-2"
									required
									name="shippingAddress"
									value="newAddress"
								/>
								Use New Address
							</label>
						</div>
					</div>
				</div>

				<div className="col-md-12">
					<button type="submit" className="btn button primary-button">
						Update Address
					</button>
				</div>
			</div>
		</form>
	);
};

export default BillingForm;
