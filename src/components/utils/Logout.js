import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
const Logout = () => {
	const navigate = useNavigate();
	const logout = () => {
		Cookies.remove('authToken');
		Cookies.remove('isLoggedIn');
		toast.success('Logged Out Successfully');
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
