import {
	RouterProvider,
	createBrowserRouter,
	useLocation,
} from 'react-router-dom';
import Navbar from './Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import {
	Home,
	About,
	Contact,
	Shop,
	Login,
	Signup,
	ProductDetails,
	Cart,
	CheckOut,
	Dashboard,
} from '../pages';
import { PageNotFound, ScrollToTop } from '../utils';
import { useEffect } from 'react';
import SearchResults from '../pages/SearchResults';
const Layout = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	return (
		<>
			<header>
				<Navbar />
				<ToastContainer position="bottom-right" />
				<ScrollToTop />
			</header>
			<main>{children}</main>
		</>
	);
};
const Header = () => {
	const router = createBrowserRouter([
		{ path: '*', element: <PageNotFound /> },
		{
			path: '/',
			element: (
				<Layout>
					<Home />
				</Layout>
			),
		},
		{
			path: '/about',
			element: (
				<Layout>
					<About />
				</Layout>
			),
		},
		{
			path: '/contact',
			element: (
				<Layout>
					<Contact />
				</Layout>
			),
		},
		{
			path: '/shop',
			element: (
				<Layout>
					<Shop />
				</Layout>
			),
		},
		{
			path: '/login',
			element: (
				<Layout>
					<Login />
				</Layout>
			),
		},
		{
			path: '/signup',
			element: (
				<Layout>
					<Signup />
				</Layout>
			),
		},
		{
			path: '/products/:id',
			element: (
				<Layout>
					<ProductDetails />
				</Layout>
			),
		},
		{
			path: '/cart',
			element: (
				<Layout>
					<Cart />
				</Layout>
			),
		},
		{
			path: '/checkout',
			element: (
				<Layout>
					<CheckOut />
				</Layout>
			),
		},
		{

			path: '/dashboard',
			element: (
				<Layout>
					<Dashboard />
        </Layout>),
        },
        {

			path: '/search',
			element: (
				<Layout>
					<SearchResults />
				</Layout>
			),
		},
	]);

	return <RouterProvider router={router} />;
};

export default Header;
