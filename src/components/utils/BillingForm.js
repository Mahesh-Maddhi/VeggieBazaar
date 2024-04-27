import React from 'react';

const BillingForm = (props) => {
	const { handleSubmit } = props.onSubmit;
	return (
		<form className="billing-form" onSubmit={(e) => handleSubmit(e)}>
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
							name="LastName"
						/>
					</div>
				</div>
				<div className="w-100"></div>
				<div className="col-md-12">
					<div className="form-group">
						<label htmlFor="state">State </label>
						<div className="select-wrap">
							<div className="icon">
								<span className="ion-ios-arrow-down"></span>
							</div>
							<select
								name="state"
								id="state"
								className="form-control">
								<option value="Telangana">Telangana</option>
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
				<div className="w-100"></div>
				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="streetaddress">Street Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="House number and street name"
							required
							name="streetaddress"
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Appartment, suite, unit etc: (optional)"
						/>
					</div>
				</div>
				<div className="w-100"></div>
				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="towncity">Town / City</label>
						<input
							type="text"
							className="form-control"
							placeholder=""
							required
							name="towncity"
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="postcodezip">Postcode / ZIP *</label>
						<input
							type="text"
							className="form-control"
							placeholder=""
							required
							name="postcodezip"
						/>
					</div>
				</div>
				<div className="w-100"></div>
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
							name="emailaddress"
						/>
					</div>
				</div>
				<div className="w-100"></div>
				<div className="col-md-12">
					<div className="form-group mt-4">
						<div className="radio">
							<label className="mr-3">
								<input
									type="radio"
									name="optradio"
									value="createaccount"
								/>{' '}
								Create an Account?{' '}
							</label>
							<label>
								<input
									type="radio"
									name="optradio"
									value="differentaddress"
								/>{' '}
								Ship to different address
							</label>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default BillingForm;
