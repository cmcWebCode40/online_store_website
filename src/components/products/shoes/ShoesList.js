import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import nairaImg from '../../../images/naira.svg';
import { context } from '../../context/ContextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShoesList = ({ title, price, image }) => {
	const [isLiked, setIsLiked] = useState(false);
	const [isAdded, setIsAdded] = useState(false);
	const [addToCart] = useContext(context);
	const handleLikeBtn = () => {
		setIsLiked(!isLiked);
	};
	const callbackCartFn = () => {
		addToCart(title, image, price);
		setIsAdded(!isAdded);
	};
	return (
		<div>
			<div className='product'>
				<div className='product-like '>
					<span onClick={handleLikeBtn}>
						<FontAwesomeIcon
							icon='heart'
							size='1x'
							style={{ marginRight: '1rem' }}
							color={isLiked ? '#ee6a65' : '#ccc'}
						/>
					</span>
				</div>
				<div className='product-image '>
					<img src={image} alt={title} />
					<p>{title.split(' ').slice(0, 9).join(' ')}</p>
					<p>
						<img className='naira' src={nairaImg} alt={title} />
						{price}
					</p>
				</div>
				<div className='product-cart p-1'>
					{isAdded ? (
						<p>
							<FontAwesomeIcon
								icon='check'
								size='1x'
								style={{ marginRight: '1rem' }}
								color='green'
							/>{' '}
							<Link className='link-cart' to='/cart'>
								Go to cart
							</Link>
						</p>
					) : (
						<p onClick={callbackCartFn}>
							<FontAwesomeIcon
								icon='shopping-cart'
								size='1x'
								style={{ marginRight: '1rem' }}
								color='#fff'
							/>
							Add to cart
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default ShoesList;
