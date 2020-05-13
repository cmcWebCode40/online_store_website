import React, { useContext } from 'react';
import Bags from './bags/Bag';
import Shoes from './shoes/Shoes';
import { context } from '../context/ContextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Products = () => {
	const [isLoading] = useContext(context);
	console.log(isLoading);

	return (
		<div id='products'>
			{isLoading ? (
				<div className='loader'>
					<FontAwesomeIcon icon='spinner' size='2x' color='#ee6a65' spin />
				</div>
			) : (
				<div>
					<Bags />
					<Shoes />
				</div>
			)}
		</div>
	);
};

export default Products;
