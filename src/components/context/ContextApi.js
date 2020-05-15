import React, { createContext, useState } from 'react';
export const context = createContext();

const ContextApi = ({ children }) => {
	const [cart, setCart] = useState([]);
	const addToCart = (title, image, price) => {
		setCart(cart => [...cart, { id: Math.random(0, 100), title, image, price, count: 1 }]);
		localStorage.setItem('cart', JSON.stringify(cart));
	};

	return (
		<div>
			<context.Provider value={[addToCart]}>{children}</context.Provider>
		</div>
	);
};

export default ContextApi;
