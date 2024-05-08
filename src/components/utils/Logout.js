import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import requestServer from './requestServer';
const Logout = () => {
	const navigate = useNavigate();
	const logout = () => {
		const response = requestServer('/logout', { method: 'POST' });
		if (!response) return toast.success('Somthing went Wrong');
		toast.success(response?.message);
		navigate('/');
	};
	return (
		<button
			type="button"
			className="btn button primary-button px-4 py-2 logout-btn"
			onClick={() => logout()}>
			Logout
		</button>
	);
};

export default Logout;
