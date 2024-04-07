const requestServer = async (url, options = { method: 'GET' }) => {
	if (url.startsWith('/')) {
		url = `http://localhost:3000${url}`;
	}
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			console.log(response);
			throw Error('Error Occured while Fetching');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default requestServer;
