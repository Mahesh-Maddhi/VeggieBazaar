const requestServer = async (url, useroptions) => {
	const defaultOptions = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
	};

	const options = { ...defaultOptions, ...useroptions };

	if (url.startsWith('/')) {
		// url = `https://veggie-bazaar-backend-mongodb.vercel.app${url}`;
		url = `http://localhost:7200${url}`;
	}
	console.log(url);
	console.log(options);
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			console.log(response);
			throw Error(
				`Error Occured while Fetching with satus code ${response.status} -> ${response.statusText}`,
			);
		}
		const data = await response.json();
		console.log('responsedata', data);
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

export default requestServer;
