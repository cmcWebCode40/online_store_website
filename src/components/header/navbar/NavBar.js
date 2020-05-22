import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBtn from '../SearchBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageIcon from '../../../images/commerce-and-shopping.svg';

const getCartItems = JSON.parse(localStorage.getItem('cart'));
const NavBar = () => {
	const [count] = useState(getCartItems);
	return (
		<div className='navbar'>
			<ul>
				<a href='/#products' className='large-nav'>
					COLLECTIONS
				</a>
				<a href='/#about' className='large-nav'>
					ABOUT
				</a>
				<Link to='/login' className='large-nav'>
					<li>LOGIN</li>
				</Link>
				<div className='search-comp'>
					<SearchBtn />
				</div>
				<Link to='/cart' className='cart-icon'>
					<li>
						<span className={!count && 'no-count' ? '' : null}>{count ? count.length : 0}</span>
						<img src={ImageIcon} alt='cart shopping' height='30' width='30' />
					</li>
				</Link>
				<Link className='user' title='user-login' to='/login'>
					<FontAwesomeIcon icon='user' size='1x' color='inheret' />
				</Link>
			</ul>
		</div>
	);
};

export default NavBar;
