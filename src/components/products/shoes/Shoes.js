import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ShoesList from './ShoesList';
import useFetch from '../../../hooks/FetchData';
import { responsive } from '../MediaQuery';

const Shoes = () => {
	const shoesCollections = useFetch('https://online-shop-api.herokuapp.com/shoes/');

	return (
		<div className='bags mt-3'>
			<div className='bags-title'>
				<span></span>
				<h2>Shoes Collectionz</h2>
			</div>
			{shoesCollections.data.data ? (
				<Carousel responsive={responsive}>
					{shoesCollections.data.data.map(item => (
						<ShoesList key={item.title} title={item.title} price={item.price} image={item.image} />
					))}
				</Carousel>
			) : (
				''
			)}
		</div>
	);
};

export default Shoes;
