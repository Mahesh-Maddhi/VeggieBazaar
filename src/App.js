import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Navbar />
				<Home />
			</>
		),
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
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
