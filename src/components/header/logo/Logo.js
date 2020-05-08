import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo mx-1">
        <img src={logo} alt="la more collections" />
      </div>
    </Link>
  )
}

export default Logo
