import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../pages/Home';
import Cart from '../components/cart/Cart';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Layouts = () => {
	return (
		<BrowserRouter>
			<div className='load'></div>
			<div>
				<Header />
				<Route exact path='/' component={Home} />
				<Route exact path='/cart' component={Cart} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default Layouts;
