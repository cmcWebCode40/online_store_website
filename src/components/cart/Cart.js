import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notifications from '../notifications/Notifications';
import CartImage from '../../images/commerce-and-shopping.svg';

const NoCartAvailabe = () => (
	<div className='no-cart my-2'>
		<div className='no-cart-image mb-2'>
			<img height='150' width='150' src={CartImage} alt='no cart available' />
		</div>
		<Link to='/' className='btn btn-light'>
			Start Shopping
		</Link>
	</div>
);
const Cart = () => {
	const [notify, setNotify] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const getCart = JSON.parse(localStorage.getItem('cart'));

	const deleteFromCart = id => {
		const data = getCart.filter(cart => (cart.id !== id ? cart : null));
		localStorage.setItem('cart', JSON.stringify(data));
		setTimeout(() => {
			setNotify(!notify);
		}, 3000);
	};
	const deleteAllCart = () => {
		localStorage.setItem('cart', JSON.stringify([]));
		setNotify(!notify);
	};

	useEffect(() => {
		const getTotal = localStorage.getItem('cart');
		if (getTotal) {
			const data = getCart.reduce((a, b) => a + Number(b.price), 0);
			setTotalPrice(data);
		}
	}, [getCart]);

	return (
		<div className='cart'>
			<h3 className='mx-1 '>MY CART ({getCart ? getCart.length : 0} ITEMS)</h3>
			{getCart ? (
				<button className='btn  bg-danger' onClick={deleteAllCart}>
					Delete All
				</button>
			) : (
				''
			)}
			{notify && <Notifications message='Item removed from cart' classStyle='new' />}
			<div className='cart-grid'>
				{getCart !== null &&
					getCart.map(cart => (
						<div className='cart-box m-2 py-1 ' key={cart.id}>
							<div className='cart-box-grid'>
								<img src={cart.image} alt={cart.title} />
								<div className='cart-box-grid-text'>
									<p>{cart.title}</p>
									<span>{cart.price}</span>
								</div>
							</div>
							<div className='cart-box-bottom'>
								<span type='button' onClick={() => deleteFromCart(cart.id)}>
									<FontAwesomeIcon
										icon='trash'
										size='1x'
										style={{ marginRight: '1rem' }}
										color='#ee6a65'
									/>
									Remove
								</span>
							</div>
						</div>
					))}
			</div>
			{!getCart && <NoCartAvailabe />}
			<p className='total mb-1'>
				Total <span>{totalPrice ? totalPrice : 0} </span>
			</p>
			<br />
			<div className='mb-3 cart-btn'>
				<a href='www.call.com' className='btn'>
					<FontAwesomeIcon
						icon='phone-alt'
						size='1x'
						style={{ marginRight: '1rem ' }}
						color='#fff'
					/>
					Call To Order
				</a>
			</div>
		</div>
	);
};

export default Cart;
