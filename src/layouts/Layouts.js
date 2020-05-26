import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../components/cart/Cart'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Dashboard = lazy(() => import('../components/admin/Dashboard'));


const Layouts = () => {
	return (
		<BrowserRouter>
			<Header />
			<Suspense fallback={<Loader />}>
				<Route exact path='/' component={Home} />
				<Route exact path='/cart' component={Cart} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/dashboard' component={Dashboard} />
			</Suspense>
			<Footer />
		</BrowserRouter>
	);
};

export default Layouts;
