import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		setIsVisible(window.scrollY > 300);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			{isVisible && (
				<button className="scroll-to-top-btn" onClick={scrollToTop}>
					<i class="fa-solid fa-angles-up"></i>
				</button>
			)}
		</div>
	);
};

export default ScrollToTop;
