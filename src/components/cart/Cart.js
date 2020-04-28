import React, { useState, useContext, useEffect } from 'react';
import { context } from '../context/ContextApi';
import imageCart from '../../images/slide3.jpg';

const Cart = () => {
  const [setCart] = useContext(context);
  const [num, setNum] = useState(0)
  const getCart = JSON.parse(localStorage.getItem('cart'));
  const [cartList, setCartList] = useState([{ id: 0.11811108009532911, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.39494435775995185, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.9702821389141814, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.6918125359326628, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.12932007405824986, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.17941781782364763, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.9848309685051662, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.6139105916279615, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.7421908225894105, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.8264201808367309, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.6036626059101684, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.7390769665032997, title: "image", image: "bag-image", price: "$200.00", count: 0 },
  { id: 0.4972256836330846, title: "image", price: "$200.00", count: 0 }]);
  // let num  = 0;
  const increasePerItemQty = (id) => {
    const result = cartList.map((cart) =>
      cart.id === id ? { count: cart.count + 1 } : null
    )
    return console.log(result);
    //   setNum(c => (c + 1))
    //  return console.log(num);
    // localStorage.setItem('cart', JSOFN.stringify(cartList));
  }
  // console.log(cartList);



  useEffect(() => {

  }, [cartList])

  return (
    <div className="cart">
      <h3 className="mx-1 ">MY CAART ({cartList ? cartList.length : 0} ITEMS)</h3>
      {num}      {(cartList) ? cartList.map(cart => (
        <div className="cart-box mx-1 py-1 my-2" key={cart.id}>
          <div className="cart-box-grid">
            <img src={imageCart} alt={cart.title} />
            <div className="cart-box-grid-text">
              <p>{cart.title}</p>
              <span>{cart.price}</span>
            </div>
          </div>
          <div className="cart-box-bottom">
            <span>delete</span>
            <span >-</span>
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
