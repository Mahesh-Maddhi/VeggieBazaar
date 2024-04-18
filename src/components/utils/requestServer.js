const requestServer = async (url, options = { method: 'GET' }) => {
	if (url.startsWith('/')) {
		url = `http://localhost:7200${url}`;
	}
	console.log(url);
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			console.log(response);
			throw Error(
				`Error Occured while Fetching with satus code ${response.status} -> ${response.statusText}`
			);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

export default requestServer;
