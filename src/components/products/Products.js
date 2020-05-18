import React from 'react';
import Bags from './bags/Bag';
import Shoes from './shoes/Shoes';

const Products = () => {
	return (
		<div id='products'>
			<div>
				<Bags />
				<Shoes />
			</div>
		</div>
	);
};

export default Products;
