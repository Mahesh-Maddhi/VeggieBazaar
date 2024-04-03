import React from 'react';

const Search = () => {
	return (
		<form className="form-inline my-2 my-lg-0">
			<input
				className="form-control mr-sm-2"
				type="search"
				placeholder="Search"
			/>
			<button className="btn my-2 my-sm-0" type="submit">
				<i className="fa-solid fa-magnifying-glass icon"></i>
			</button>
		</form>
	);
};

export default Search;
