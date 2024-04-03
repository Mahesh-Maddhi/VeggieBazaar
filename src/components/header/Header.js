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
					<Navbar />
					<Home />
				</>
			),
			onError: <PageNotFound />,
		},
		{
			path: '/about',
			element: (
				<>
					<Navbar />
					<About />
				</>
			),
		},
		{
			path: '/contact',
			element: (
				<>
					<Navbar />
					<Contact />
				</>
			),
		},
		{
			path: '/shop',
			element: (
				<>
					<Navbar />
					<Shop />
				</>
			),
		},
	]);

	return (
		<>
			<main>
				<RouterProvider router={router} />
			</main>
		</>
	);
};

export default Header;
