import React, { useContext } from 'react';
import Bags from './bags/Bag';
import Shoes from './shoes/Shoes';
import { context } from '../context/ContextApi';

const Products = () => {
	const [isLoading] = useContext(context);
	console.log(isLoading);

	return (
		<div id='products'>
			{isLoading ? (
				<h1>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusamus asperiores
					perferendis ducimus sunt sit doloribus at similique excepturi consectetur, praesentium hic
					optio iure enim voluptas odio assumenda impedit aliquid?
				</h1>
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
