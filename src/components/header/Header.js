import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import {
	Home,
	About,
	Contact,
	Shop,
	Login,
	Signup,
	ProductDetails,
	Cart,
} from '../pages';
import { PageNotFound } from '../utils';

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<Navbar />
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
			path: '/products/:productId',
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
	]);

	return <RouterProvider router={router} />;
};

export default Header;
