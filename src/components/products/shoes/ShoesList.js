import React from 'react';
import slideImage from '../../../images/slide3.jpg';

const ShoesList = () => {
  return (
    <div>
      <div className="product">
        <div className="product-like ">
          like
      </div>
        <div className="product-image ">
          <img src={slideImage} alt="" />
          <p>new fashion bag</p>
          <p>$200.00</p>
        </div>
        <div className="product-cart p-1">
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  )
}

export default ShoesList
