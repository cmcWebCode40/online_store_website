import React, { createContext, useState, useEffect } from 'react';

export const context = createContext();
const getCartItems = JSON.parse(localStorage.getItem('cart'));
const ContextApi = ({ children }) => {
	const [cart, setCart] = useState(getCartItems);
	const [cartState, setCartState] = useState(false);

	const addToCart = (title, image, price) => {
		setCartState(!cartState);
		if (cart === null) {
			setCart([{ id: Math.random(0, 100), title, image, price, count: 1 }]);
			localStorage.setItem('cart', JSON.stringify(cart));
		} else {
			setCart([...cart, { id: Math.random(0, 100), title, image, price, count: 1 }]);
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	};

	useEffect(() => {}, [cart]);

	return (
		<div>
			<context.Provider value={[addToCart, cartState, setCartState]}>{children}</context.Provider>
		</div>
	);
};

export default ContextApi;
