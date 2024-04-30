import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem('auth_token');
		navigate('/');
		toast.success('Logged out Successfully');
	};
	return (
		<button
			type="button"
			className="btn button primary-button"
			onClick={() => logout()}>
			Logout
		</button>
	);
};

export default Logout;
