import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Shop from '../pages/Shop';
import PageNotFound from '../pages/PageNotFound';
const Header = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<>
					<header>
						<Navbar />
					</header>
					<main>
						<Home />
					</main>
				</>
			),
			onError: <PageNotFound />,
		},
		{
			path: '/about',
			element: (
				<>
					<header>
						<Navbar />
					</header>
					<main>
						<About />
					</main>
				</>
			),
		},
		{
			path: '/contact',
			element: (
				<>
					<header>
						<Navbar />
					</header>
					<main>
						<Contact />
					</main>
				</>
			),
		},
		{
			path: '/shop',
			element: (
				<>
					<header>
						<Navbar />
					</header>
					<main>
						<Shop />
					</main>
				</>
			),
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default Header;
