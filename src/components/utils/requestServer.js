import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
const requestServer = async (url, useroptions) => {
	const token = Cookies.get('authToken');
	const defaultOptions = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `BEARER ${token}`,
		},
	};

	const options = { ...defaultOptions, ...useroptions };

	if (url.startsWith('/')) {
		url = `https://veggie-bazaar-backend-mongodb.vercel.app${url}`;
		// url = `http://localhost:7200${url}`;
	}
	console.log(url);
	console.log(options);
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(
				`Request failed with status ${response.status} - ${response.statusText}`,
			);
		}

		const data = await response.json();
		console.log('responsedata', data);
		return data;
	} catch (error) {
		toast.error(error.message || 'Something went wrong');
		console.log(error.message);
	}
};

export default requestServer;
