import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductCard, Spinner, requestServer } from '../utils';

const useQuery = () => {
	const { search } = useLocation();
	return new URLSearchParams(search);
};
const SearchResults = () => {
	const [products, setProducts] = useState([]);
	const [isEmpty, setIsEmpty] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const query = useQuery();
	const q = query.get('q');

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const responseData = await requestServer(`/search?q=${q}`);
			if (responseData?.length) {
				setProducts(responseData);
				setIsEmpty(false);
				setLoading(false);
			} else {
				setIsEmpty(true);
				setLoading(false);
			}
		};
		fetchData();
	}, [q]);

	return (
		<section className="search-section">
			{isLoading && <Spinner />}
			{isEmpty && !isLoading ? (
				<div className="empty-search-results">
					<h4 className="heading">
						{' '}
						<span style={{ color: 'var(--main-color)' }}>
							" {q} "
						</span>{' '}
						Not Found
					</h4>
				</div>
			) : (
				<>
					<h4 className="text-center py-3">
						Search Results for "
						<span style={{ color: 'var(--main-color)' }}>
							{' '}
							{q}{' '}
						</span>
						"
					</h4>
					<div className="search-results">
						{products.map((product) => {
							return (
								<ProductCard
									productDetails={product}
									key={product.productId}
								/>
							);
						})}
					</div>
				</>
			)}
		</section>
	);
};

export default SearchResults;
