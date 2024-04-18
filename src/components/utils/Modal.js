import React, { useState } from 'react';

const Modal = (props) => {
	console.log(props);
	const [isOpen, setIsOpen] = useState(true);
	const defaultMessageDetails = {
		status: 'success',
		message: 'Testing Message Modal',
	};
	const { status, message } = props.message || defaultMessageDetails;

	const handleClick = () => {
		setIsOpen(false);
	};
	return (
		<>
			{isOpen && (
				<div
					className="modal fade show"
					id="exampleModal"
					style={{ display: 'block' }}>
					<div className="modal-dialog  modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className={`modal-title text-${status}`}
									id="exampleModalLabel">
									{status}
								</h5>
								<button type="button" className="close" onClick={handleClick}>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">{message}</div>
							<div className="modal-footer">
								<button
									onClick={handleClick}
									type="button"
									className="btn btn-secondary">
									Ok
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
