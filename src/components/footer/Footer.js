import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
	return (
		<footer className='footer pt-1'>
			<a href='#content'>
				<div className='scroll'>
					<FontAwesomeIcon icon='arrow-up' size='1x' color='#fff' />
				</div>
			</a>
			<div className='footer-grid'>
				<div className='footer-subscribe my-1'>
					<form>
						<input type='text' placeholder='enter your email address' required />
						<button type='submit'>SUBSCRIBE</button>
					</form>
				</div>
				<div className='footer-nav my-1'>
					<ul>
						<a title='collections' href='/#products'>
							COLLECTIONS
						</a>
						<a title='services' href='/#about'>
							SERVICES
						</a>
						<Link title='contact' to='/'>
							CONTACT
						</Link>
						<Link title='cart' to='/cart'>
							<FontAwesomeIcon icon='shopping-cart' size='1x' color='#fff' />
						</Link>
					</ul>
				</div>
			</div>
			<small>LA MORE COLLECTION &copy; 2020</small>
			<p>
				built with
				<FontAwesomeIcon icon='coffee' size='1x' color='#fff' /> by
				<a
					style={{ color: '#fff', marginLeft: '.5rem' }}
					href='https://twitter.com/cmcWebCode?s=07'
					target='_blanck'>
					cmcWebCode
				</a>
			</p>
		</footer>
	);
};

export default Footer;
