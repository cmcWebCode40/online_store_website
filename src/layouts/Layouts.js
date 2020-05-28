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
const AdminLogin = lazy(() => import('../pages/AdminLogin'));
const AdminRegister = lazy(() => import('../pages/AdminRegister'));


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
				<Route exact path='/admin/_auth/login' component={AdminLogin} />
				<Route exact path='/admin/_auth/register' component={AdminRegister} />
			</Suspense>
			<Footer />
		</BrowserRouter>
	);
};

export default Layouts;
