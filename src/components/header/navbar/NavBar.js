import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBtn from '../SearchBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { context } from '../../context/ContextApi';
import ImageIcon from '../../../images/commerce-and-shopping.svg';

const NavBar = () => {
	const [count, setCount] = useState([]);
	const [, cartState] = useContext(context);

	useEffect(() => {
		const getCartItems = JSON.parse(localStorage.getItem('cart'));
		const getItemsLength = () => {
			setCount(getCartItems);
		};
		getItemsLength();
	}, [cartState]);

	return (
		<div className='navbar'>
			<ul>
				<li>
					<a href='/#products' className='large-nav'>
						COLLECTIONS
					</a>
				</li>
				<li>
					<a href='/#about' className='large-nav'>
						ABOUT
					</a>
				</li>
				<li>
					<Link to='/login' className='large-nav'>
						LOGIN
					</Link>
				</li>
				<li className='search-comp'>
					<SearchBtn />
				</li>
				<li className='cart-icon'>
					<Link to='/cart' className='cart-icon'>
						<span className={!count && 'no-count' ? '' : null}>
							{count === null ? 0 : count.length}
						</span>
						<img src={ImageIcon} alt='cart shopping' height='30' width='30' />
					</Link>
				</li>
				<li>
					<Link className='user' title='user-login' to='/login'>
						<FontAwesomeIcon icon='user' size='1x' color='inheret' />
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
