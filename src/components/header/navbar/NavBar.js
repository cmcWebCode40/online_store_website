import React from 'react';
import { Link } from 'react-router-dom';
import SearchBtn from '../SearchBtn';
import ImageIcon from '../../../images/commerce-and-shopping.svg';

const NavBar = () => {
  return (
    <div className="navbar ">
      <ul>
        <a href="/#products" className="large-nav">
          COLLECTIONS
        </a>
        <a href="/#about" className="large-nav">
          ABOUT
        </a>
        <Link to="/login" className="large-nav">
          <li>LOGIN</li>
        </Link>
        <SearchBtn />
        <Link to="/cart" className="cart-icon">
          <li> <img src={ImageIcon} alt="cart shopping" height="30" width="30" />
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBar
