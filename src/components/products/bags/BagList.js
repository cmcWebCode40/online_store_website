import React, { useState, useContext } from 'react';
import { context } from '../../context/ContextApi';
import slideImage from '../../../images/slide3.jpg';

const BagList = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [addToCart] = useContext(context);
  const handleLikeBtn = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="product">
      <div className="product-like">
        <span onClick={handleLikeBtn} className={isLiked ? 'liked' : ""} >like</span>
      </div>
      <div className="product-image ">
        <img src={slideImage} alt="" />
        <p>new fashion bag</p>
        <p>$200.00</p>
      </div>
      <div className="product-cart p-1" onClick={() => { addToCart('image', 'bag-image', '$200.00') }}>
        <p>Add to cart</p>
      </div>
    </div>
  )
}

export default BagList