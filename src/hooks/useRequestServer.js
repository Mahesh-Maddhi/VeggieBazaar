import { useEffect, useState } from 'react';
import axios from 'axios';
export const useRequestServer = (userPayload) => {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(false);

	useEffect(() => {
		let payload = {
			method: 'get',
			url: 'https://veggie-bazaar.vercel.app/',
			headers: {
				'Content-Type': 'application/json',
			},
		};
		payload = { ...userPayload };
		console.log('payloa', payload);

		const fetchProducts = async () => {
			try {
				const response = await axios(payload);
				setData(response.data);
			} catch (error) {
				setError(true);
				console.log(error);
				setData([]);
			}
		};
		fetchProducts();
		console.log('dataFetched');
	});
	useEffect(() => {
		setLoading(false);
		console.log('setLoading');
	}, [data]);
	return [data, isLoading, isError];
};
