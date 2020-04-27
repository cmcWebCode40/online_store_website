import React from 'react';
import Logo from './logo/Logo';
import NavBar from './navbar/NavBar';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavBar/>
    </div>
  )
}

export default Header
