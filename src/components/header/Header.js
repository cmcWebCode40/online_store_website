import React from 'react';
import Logo from './logo/Logo';
import NavBar from './navbar/NavBar';

const Header = () => {
	return (
		<header className='header'>
			<Logo />
			<NavBar />
		</header>
	);
};

export default Header;
