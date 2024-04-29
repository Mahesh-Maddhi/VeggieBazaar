import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const inputRef = useRef(null);
	const navigate = useNavigate();
	const handleSearch = (e) => {
		e.preventDefault();
		const query = inputRef.current?.value.trim();
		if (query) {
			navigate(`/search?q=${encodeURIComponent(query)}`);
			inputRef.current.value = '';
		}
	};

	return (
		<form
			className="form-inline my-2 my-lg-0"
			onSubmit={handleSearch}
			role="search">
			<input
				ref={inputRef}
				className="form-control mr-sm-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
			/>
			<button
				className="btn  my-2 my-sm-0 fa-solid fa-magnifying-glass icon"
				type="submit"
				aria-label="Submit Search"></button>
		</form>
	);
};

export default Search;
