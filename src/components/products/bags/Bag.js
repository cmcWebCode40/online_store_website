import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BagList from './BagList';
import useFetch from '../../../hooks/FetchData';
import { responsive } from '../MediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Bag = () => {
	const bagCollection = useFetch('https://online-shop-api.herokuapp.com/bags/');

	return (
		<div className='bags mt-3'>
			<div className='bags-title'>
				<span></span>
				<h2>Bags Collectionz</h2>
			</div>
			{bagCollection.data.data ? (
				<Carousel responsive={responsive}>
					{bagCollection.data.data.map(item => (
						<BagList key={item.title} title={item.title} price={item.price} image={item.image} />
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

export default Bag;
