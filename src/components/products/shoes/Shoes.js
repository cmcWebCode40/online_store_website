import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ShoesList from './ShoesList';
import useFetch from '../../../hooks/FetchData';
import { responsive } from '../MediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
				<div className='loader'>
					<FontAwesomeIcon icon='spinner' size='2x' color='#ee6a65' spin />
				</div>
			)}
		</div>
	);
};

export default Shoes;
