import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <div className="navbar ml-2 mt-2">
      <ul>
        <li> <a href="wecsjkcskjdc.com">COLLECTIONS</a></li>
        {/* <li> <a href="wecsjkcskjdc.com">ABOUT</a></li> */}
        {/* <li> <a href="wecsjkcskjdc.com">SUBSCRIBE</a></li>
        <li> <a href="wecsjkcskjdc.com">CART</a></li> */}
        <li> <a href="wecsjkcskjdc.com"> <FontAwesomeIcon
          icon="shopping-cart"
          size="2x"
          style={{ marginRight: "1rem" }}
          color="brown"
        /></a></li>
      </ul>
    </div>
  )
}

export default NavBar
