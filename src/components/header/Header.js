import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import { Home, About, Contact, Shop, Login, Signup } from '../pages';
import { PageNotFound } from '../utils';

const Header = () => {
	const router = createBrowserRouter([
		{
			path: '*',
			element: <PageNotFound />,
		},
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
		{
			path: '/login',
			element: (
				<>
					<header>
						<Navbar />
					</header>
					<main>
						<Login />
					</main>
				</>
			),
		},
		{
			path: '/signup',
			element: (
				<>
					<header>
						<Navbar />
					</header>
					<main>
						<Signup />
					</main>
				</>
			),
		},
	]);

	return <RouterProvider router={router} />;
};

export default Header;
