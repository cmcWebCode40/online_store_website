import React, { useState, useContext, useEffect } from 'react';
import { context } from '../context/ContextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imageCart from '../../images/slide3.jpg';

const Cart = () => {
  // const [setCart] = useContext(context);
  const [notify, setNotify] = useState(false);
  const getCart = JSON.parse(localStorage.getItem('cart'));

  const increasePerItemQty = (id) => {
    const data = getCart.map(cart => (
      (cart.id === id) ? { ...cart, count: cart.count + 1 } : cart
    ))
    localStorage.setItem('cart', JSON.stringify(data));
    setNotify(!notify)
  };
  const decreasePerItemQty = (id) => {
    const data = getCart.map(cart => (
      (cart.id === id && cart.count >= 1) ? { ...cart, count: cart.count - 1 } : cart
    ))
    localStorage.setItem('cart', JSON.stringify(data));
    setNotify(!notify)
  };
  const deleteFromCart = (id) => {
    const data = getCart.filter(cart =>
      cart.id !== id ? cart : null
    )
    localStorage.setItem('cart', JSON.stringify(data));
    setNotify(!notify)
  }

  useEffect(() => {

  }, [notify])

  return (
    <div className="cart">
      <h3 className="mx-1 ">MY CAART ({getCart ? getCart.length : 0} ITEMS)</h3>
      {(getCart) ? getCart.map(cart => (
        <div className="cart-box mx-1 py-1 my-2" key={cart.id}>
          <div className="cart-box-grid">
            <img src={imageCart} alt={cart.title} />
            <div className="cart-box-grid-text">
              <p>{cart.title}</p>
              <span>{cart.price}</span>
            </div>
          </div>
          <div className="cart-box-bottom">
            <span onClick={() => deleteFromCart(cart.id)}>
              <FontAwesomeIcon
                icon="trash"
                size="1x"
                style={{ marginRight: "1rem" }}
                color="brown"
              />
             delete
            </span>
            <span onClick={() => decreasePerItemQty(cart.id)}>-</span>
            <span>{cart.count}</span>
            <span onClick={() => increasePerItemQty(cart.id)}>+</span>
          </div>
        </div>
      )) : <p>NO CART</p>}
      <p className="total">Total <span>:bla bla bla </span> <br /> <a href="www.call.com">Call To Order</a></p>
    </div>
  )
};

export default Cart
